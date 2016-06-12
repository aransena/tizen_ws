////////// Main Variables //////////

var WHEEL_CENTER_X = (360/2)-(256/2);
var WHEEL_CENTER_Y = WHEEL_CENTER_X;

var commsInterval;
var timeOutInterval;
var timeOutInterval;
var uiInterval;

var commsInterval_T = 5;
var control_mode = window.localStorage.getItem('mode');

var touchDownT = 0;

var hidden, visibilityChange;

if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}

// Multitouch vars //
var touchDownT = 0;
var touchDownXY = [ 0, 0 ];
var lastPos = [ 0, 0 ];

var timer; // long press timer
var longtouch_chk = false;
var touchduration = 1000; // length of time we want the user to touch before

var endTouch = false;

var ws = '';
var url = window.localStorage.getItem('url').toString();
var mode = window.localStorage.getItem('mode').toString();

var center = 0;
var run_avg = 0.0;


var msgPack = {
	'Device' : 'SmartWatch',
	'ControlLevel' :1,
	'Clockwise' : 0,
	'CounterClockwise' : 0,
	'SwipeLeft' : 0,
	'SwipeRight' : 0,
	'Press' : 0,
	'LongHold' : 0,
	'NumFingers' : 0,
	'LightLevel' : 0,
	'LightSignal' : 0,
	'ALPHA' :0,
	'BETA' :0,
	'GAMMA' :0,
	'Mode':0,
	'Turn':'0.0',
	'reset' : function(all) {
		this.Clockwise = 0;
		this.CounterClockwise = 0;
		this.SwipeLeft = 0;
		this.SwipeRight = 0;
		this.Press = 0;
		if (all) {
			this.LongHold = 0;
			this.NumFingers = 0;
		}
	}
};

msgPack.Mode = control_mode;

var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var page = document.getElementById("robotControl");

////////// Start  //////////
console.log("START: " + run_avg.toString());

console.log("connecting to, 2: " + url);
ws = new WebSocket(url);

///////// Control Screen GUI Setup ////////
canv.style.backgroundColor = "white";

//Loading of the home test image - img1
var wheelImg = new Image();
wheelImg.onload = function () {
	ctx.drawImage(wheelImg, WHEEL_CENTER_X, WHEEL_CENTER_Y);
};

wheelImg.src = 'img/wheel.png';

//// Motion Events ////
function onDeviceMotion(e) {
	msgPack.ALPHA = e.accelerationIncludingGravity.x.toFixed(2);//Math.round(e.accelerationIncludingGravity.x);
	msgPack.BETA = e.accelerationIncludingGravity.y.toFixed(2);//Math.round(e.accelerationIncludingGravity.y);
	msgPack.GAMMA = e.accelerationIncludingGravity.z.toFixed(2);//Math.round(e.accelerationIncludingGravity.z);
}

var timeOut = 300;
var sendVal = 0;
var maxTick = 150;//timeOut/timer_del;
var timerCount = maxTick;
var incrementSize = 15; // 15 degrees per bezel click
var time = new Date();
var curr_time = time.getTime;
var prev_time = time.getTime;
var abs_max_vel = 1;

function timeOutSignal(){
	timerCount = maxTick;
	sendVal = 0.0;
	msgPack.Turn = sendVal.toString();
	clearInterval(timeOutInterval);
	console.log("Timeout");
}

// /// Rotary Events /////
var rotaryEventHandler = function(e) {	
	if(mode==="1"){
		if (e.detail.direction === "CW") {
			msgPack.Clockwise = 1;
		}
		else{
			msgPack.CounterClockwise = 1;
		}
	}
	else if(mode==="2"){
		time = new Date();
		curr_time = time.getTime();		
		try{
			clearInterval(timeOutInterval);
			}
		catch(err){}
		
		if (e.detail.direction === "CW") {
			if(curr_time === prev_time){
				sendVal = -abs_max_vel;
			}else{
				sendVal = -incrementSize/(curr_time-prev_time);
			}
			
			if (sendVal < -abs_max_vel){
				sendVal = -abs_max_vel;
			}
		}			
		else{
			if(curr_time === prev_time){
				sendVal = abs_max_vel;
			}else{
				sendVal = incrementSize/(curr_time-prev_time);
			}
			
			if (sendVal > abs_max_vel){
				sendVal = abs_max_vel;
			}
		}
		//console.log("TURN: "+ sendVal.toString()); //+ "\t\tCNT: "+ timerCount.toString());

		msgPack.Turn =sendVal.toString();
		prev_time = curr_time;
		
		timerCount = 95;
		timeOutInterval = setInterval(timeOutSignal, timeOut);
	}
	    
};


function wheelImgInterval(){
	ctx.clearRect(0,0,ctx.width, ctx.height);
	ctx.translate(180,180);
	if(mode === "1"){
		//ctx.rotate(_heading*-50 * Math.PI / 180);
	}
	else{
		var rot = 0.0;
		rot = -sendVal*120*(Math.PI/180);
		if(isNaN(run_avg)){
			run_avg = 0.0;
		}
		run_avg = (run_avg*10 + rot)/11;
		console.log("RUN1: " + run_avg.toString()+ "\t\tRotation: " + rot.toString());
		ctx.rotate(center*-1);
		center = 0;
		center = center + run_avg;
		
		ctx.rotate(run_avg);

		if(Math.abs(run_avg)<0.1){
			run_avg = 0;
		}
	}
	ctx.translate(-180,-180);
	ctx.drawImage(wheelImg, WHEEL_CENTER_X, WHEEL_CENTER_Y);
}

// //// Touch Events //////
var multiTouchHandler = function(e) {
	longtouch_chk = false;
	if (ws.readyState === 1) {
		timer = setTimeout(longtouch, touchduration);
		touchDownT = Date.now();
		e.preventDefault();
		touchDownXY[0] = e.touches[0].pageX;
		touchDownXY[1] = e.touches[0].pageY;
		lastPos[0] = touchDownXY[0];
		lastPos[1] = touchDownXY[1];

		var touchCount = e.touches.length;
		console.log("touches: " + touchCount);

		msgPack.NumFingers = touchCount;

		if (touchCount === 2) {
			document.getElementById("canvas").style.backgroundColor = "#26a69a";
		} else if (touchCount === 1) {
			document.getElementById("canvas").style.backgroundColor = "#80cbc4";
		} else {
			console.log("Error");
		}
	} else {
		console.log("Websocket not ready for touch event");
	}
};

var longtouch = function() {
	longtouch_chk = true;
	msgPack.LongHold = 1;
	
	if(msgPack.NumFingers===1){
	msgPack.ControlLevel = 2;
	}
	else{
		msgPack.ControlLevel = 3;
	}
	
	navigator.vibrate(400);
};

var cancelTouchHandler = function() {
};

var moveTouchHandler = function(e) {
	e.preventDefault();
	lastPos[0] = e.touches[0].pageX;
	lastPos[1] = e.touches[0].pageY;
};

function getSwipeType(Pos1, Pos2) {
	var dist_lim = 30;

	var dist = Math.sqrt(Math.pow(Pos1[0] - Pos2[0], 2)	+ Math.pow(Pos1[1] - Pos2[1], 2));

	if (dist > dist_lim) {
		if (Math.abs(Pos1[0] - Pos2[0]) > dist_lim) {
			if (Pos1[0] > Pos2[0]) {
				msgPack.SwipeRight = 1;
			} else {
				msgPack.SwipeLeft = 1;
			}
		}
	} else {
		msgPack.Press = 1;
		msgPack.ControlLevel = 1;
	}
}

var endTouchHandler = function(e) {
	endTouch = true;
	document.getElementById("canvas").style.backgroundColor = "white";
	if(msgPack.ControlLevel>1){
		msgPack.ControlLevel = 1;
	}
	else{
		if (timer) { // if a long press wasn't detected...
			clearTimeout(timer);
			msgPack.LongHold = 0;
		}
	
		if (!longtouch_chk) {
			e.preventDefault();
			var dt_lim = 400;
	
			var dur = Date.now() - touchDownT;
	
			console.log("Touch event duration: " + dur);
	
			if (dur < dt_lim) {
				getSwipeType(lastPos, touchDownXY);
	
			} 
			else{
				msgPack.Press = 1;
				msgPack.ControlLevel=1;
			}
		}
	}

};

////////////////// Comms ////////////
ws.onclose = function() {
	console.error("Websocket Close");
	try{
		clearInterval(commsInterval);
	}
	catch(err){}

	try{
		clearInterval(uiInterval);
	}
	catch(err){}
	
	window.removeEventListener("rotarydetent", rotaryEventHandler, false);
	window.removeEventListener("tizenhwkey",control_back,false);
	window.removeEventListener("devicemotion", onDeviceMotion);
	document.removeEventListener(visibilityChange, handleVisibilityChange, false);
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
	ws.send('USER'); // Send the message 'Ping' to the server
	
	/// Setup Events ///
	window.addEventListener("devicemotion", onDeviceMotion);
	page.addEventListener('touchstart', multiTouchHandler, false);
	page.addEventListener('touchmove', moveTouchHandler, false);
	page.addEventListener('touchcancel', cancelTouchHandler, false);
	page.addEventListener('touchend', endTouchHandler, false);
	document.addEventListener(visibilityChange, handleVisibilityChange, false);
	window.addEventListener('tizenhwkey', control_back);
	window.addEventListener('devicemotion', onDeviceMotion);

	window.addEventListener("rotarydetent", rotaryEventHandler, false);
	console.log("Events added");
};

ws.onmessage = function(msg) {
	//console.log("message: " + msg.data);
	if (msg.data === "USER") {
		console.log("CONNECTED");
		ws.send("RUN");
		startIntervals();
	}
};

function sysComms() {
	//console.log("sysComms Send");
	ws.send(JSON.stringify(msgPack));
	if (!endTouch) {
		msgPack.reset(false);
	} else {
		msgPack.reset(true);
	}
	endTouch = false;
}

function startIntervals() {
	console.log("Starting comms");
	commsInterval = setInterval(sysComms, commsInterval_T);
	uiInterval = setInterval(wheelImgInterval, 30);
	console.log("comms interval set");
}


//// System Events ///
function handleVisibilityChange() {
	console.log("Visibility Change");

	if (document[hidden]) {
		console.log("Page is now hidden.");
		
		clearInterval(commsInterval);
		clearInterval(timeOutInterval);
		clearInterval(timeOutInterval);
		clearInterval(uiInterval);

		window.removeEventListener("rotarydetent", rotaryEventHandler, false);
		window.removeEventListener("devicemotion", onDeviceMotion);

	} else {
		console.log("Page is now visible. " + ws.readyState);
		window.addEventListener("rotarydetent", rotaryEventHandler, false);
		window.addEventListener("devicemotion", onDeviceMotion);

		ws.send("USER");
	}
}

function control_back(ev) {
	console.log(ev.keyName);
	if (ev.keyName === "back") {
		//ws.close();
		msgPack.ControlLevel = -1;
		msgPack.BETA = 0;
		msgPack.Turn = "0";
		ws.send(JSON.stringify(msgPack));
		
		//console.log("back button pressed"); 
		//clearInterval(sensorInterval);
		
		
		var page = document.getElementsByClassName( 'ui-page-active' )[0],
		pageid = page ? page.id : "";
	
		if( pageid === "pageMain" ) {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		} else {
			window.history.back();
		}
		ws.close();
	} 
	
}


