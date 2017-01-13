////////// Main Variables //////////
var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var target_force = 0;

var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}

// //////// Start //////////
console.log("START");

var url = window.localStorage.getItem('url').toString();
console.log("connecting: " + url);
var ws = new WebSocket(url);

canv.style.backgroundColor = "white";


///////// Functions ////////

function exitPage() {
	var page = document.getElementsByClassName('ui-page-active')[0], pageid = page ? page.id
			: "";

	if (pageid === "pageMain") {
		try {
			tizen.application.getCurrentApplication().exit();
		} catch (ignore) {
		}
	} else {
		window.history.back();
	}
	ws.close();
}


// //////////////// Comms ////////////
ws.onclose = function() {
	console.error("Websocket Close");

	window.removeEventListener("tizenhwkey", control_back, false);
	document.removeEventListener(visibilityChange, handleVisibilityChange,
			false);
};

ws.onerror = function() {
	console.error("Websocket Error!");
	alert("Websocket Error!");
	try {
		tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
		console.error("error exiting program");
	}
};

ws.onopen = function() {
	console.log("Websocket open confirm!");
	
	ws.send('{"op":"subscribe", "topic":"/uarm_read"}');
	ws.send('{"op":"subscribe", "topic":"/target_force"}');

	document.addEventListener(visibilityChange, handleVisibilityChange, false);
	window.addEventListener('tizenhwkey', control_back);
	
	console.log("Events added");
};

ws.onmessage = function(msg) {
//	console.log("message: " + msg.data);
	var ROSmsg = JSON.parse(msg.data);
	var topic = ROSmsg.topic;
//	console.log("source topic: " + topic);
	ROSmsg = ROSmsg.msg.data.split(",");
	var val = parseFloat(ROSmsg[0]);
	
	if (topic === "/target_force"){
		target_force = val;
	}
	else if(topic === "/uarm_read"){
		processForceData(val);
	}
		
};


function processForceData(force){
//	console.log(force);
	ctx.clearRect(0, 0, canv.width, canv.height);
	ctx.font = "100px Arial";
	
	if(force<0){
		ctx.fillText(force, 110, 230);
	}
	else if(force<10){
		ctx.fillText(force, 148, 230);
	}
	else if(force<100){
		ctx.fillText(force, 125, 230);
	}
	else{
		ctx.fillText(force, 90, 230);
	}

	console.log(force.toString())
//	var upper_limit = 1.3;
	var lower_limit = 0.7;
	var limit_range = 0.1;
	
	var upper_limit_plus = Math.max(target_force*(1+limit_range),target_force+10);
	var upper_limit_minus = Math.min(target_force*(1-limit_range),target_force-10);
	
	if(force>=(upper_limit_plus)){
//		canv.style.backgroundColor = "rgb(255, 0, 0)";
		canv.style.backgroundColor = "red";	
	}	
	else if((force>=upper_limit_minus) && (force<(upper_limit_plus))){
//		canv.style.backgroundColor = "rgb(0, 0, 255)";
		canv.style.backgroundColor = "green";
	}
	else if((force>=target_force*lower_limit) && (force<(upper_limit_minus))){
//		canv.style.backgroundColor = "rgb(0, 255, 0)";
		canv.style.backgroundColor = "yellow";
	}
	else{
//		canv.style.backgroundColor = "rgb(255, 0, 0)";
		canv.style.backgroundColor = "blue";	
	}
}

// // System Events ///
function handleVisibilityChange() {
	console.log("Visibility Change");
	if (document[hidden]) {
		exitPage();
	}
}

function control_back(ev) {
	console.log(ev.keyName);
	if (ev.keyName === "back") {
		exitPage();
	}
}
