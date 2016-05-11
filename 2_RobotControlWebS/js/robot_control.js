////////// Main Variables //////////

var commsInterval;
var commsInterval_T = 30;

var sensorInterval;
var sensorInterval_T = 1000;

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

var sensorService = tizen.sensorservice	|| (window.webapis && window.webapis.sensorservice) || null;
var proximitySensor = sensorService.getDefaultSensor("LIGHT");
var prev_LightSignal = 0;

var msgPack = {
	'Device' : 'SmartWatch',
	'ControlLevel' :0,
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
	'reset' : function(all) {

		this.Clockwise = 0;
		this.CounterClockwise = 0;
		this.SwipeLeft = 0;
		this.SwipeRight = 0;
		this.Press = 0;
		//this.ControlLevel = 0;
		// this.LGT = 0;
		if (all) {
			this.LongHold = 0;
			this.NumFingers = 0;
		}

	}
};
/*
var touchTypes = {
	SWIPE_L : 1,
	SWIPE_R : 2,
	PRESS : 3
};*/

var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var headr = document.getElementById("header");
var page = document.getElementById("robotControl");

////////// Start Script //////////
console.log("connecting to, 2: " + url);
ws = new WebSocket(url);

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

/// Start Events ///
//startSensor();
proximitySensor.start(onsuccessCB);
//startRotaryEventHandler();


///////// Control Screen GUI Setup ////////
canv.style.backgroundColor = "white";
headr.style.backgroundColor = "white";

ctx.beginPath();
ctx.arc(180, 70, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();

/*function handleVisibilityChange() {
	console.log("Visibility Change");

	if (document[hidden]) {
		console.log("Page is now hidden.");
		clearInterval(sensorInterval);
		clearInterval(commsInterval);
//		ws.close();

	} else {
		console.log("Page is now visible. " + ws.readyState);
		
		ws.send("USER");
		// startIntervals();
	}
}*/

//// Motion Events ////
function onDeviceMotion(e) {
	//console.log(e);
	//console.log(e.accelerationIncludingGravity.x)
	msgPack.ALPHA = e.accelerationIncludingGravity.x.toFixed(2);//Math.round(e.accelerationIncludingGravity.x);
	msgPack.BETA = e.accelerationIncludingGravity.y.toFixed(2);//Math.round(e.accelerationIncludingGravity.y);
	msgPack.GAMMA = e.accelerationIncludingGravity.z.toFixed(2);//Math.round(e.accelerationIncludingGravity.z);
}

// /// Rotary Events /////
var rotaryEventHandler = function(e) {
	if (e.detail.direction === "CW") {
		console.log("Rotate CW");
		msgPack.Clockwise = 1;
	} else {
		console.log("Rotate CCW");
		msgPack.CounterClockwise = 1;
	}
};

/*

function startRotaryEventHandler() {
	
}*/

// ///// Light Sensor /////////

function onGetSuccessCB(sensorData) {
	var lightLevel = sensorData.lightLevel;
	// console.log("Light Level: " + lightLevel);
	msgPack.LightLevel = lightLevel;
	if (lightLevel < 200) {
		msgPack.LightSignal = 1;
		prev_LightSignal = 1;
	} else {
		msgPack.LightSignal = 0;
		if (prev_LightSignal === 1) {
			//navigator.vibrate([ 100, 50, 100, 50, 100 ]);
		}
		prev_LightSignal = 0;
	}
}


function sensorCheck() {
	proximitySensor.getLightSensorData(onGetSuccessCB);
}


function onsuccessCB() {
	console.log("The sensor started successfully.");
	sensorInterval = setInterval(sensorCheck, sensorInterval_T);
}

/*function startSensor() {
	
}*/

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

		// ws.send("Touches: " + touchCount);
		msgPack.NumFingers = touchCount;

		if (touchCount === 2) {
			// touchType = "Two Finger";
			document.getElementById("canvas").style.backgroundColor = "blue";
			document.getElementById("header").style.backgroundColor = "blue";
		} else if (touchCount === 1) {
			// touchType = "One Finger";
			document.getElementById("canvas").style.backgroundColor = "red";
			document.getElementById("header").style.backgroundColor = "red";
		} else {
			console.log("Error");
			// ws.send("Unknown");
		}

	} else {
		console.log("Websocket not ready for touch event");
	}
};


var longtouch = function() {
	// ws.send(touchType + " Hold");
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
	// e.preventDefault();
	// ws.send("touch cancelled");
};


var moveTouchHandler = function(e) {
	e.preventDefault();
	lastPos[0] = e.touches[0].pageX;
	lastPos[1] = e.touches[0].pageY;
};

function getSwipeType(Pos1, Pos2) {
	var dist_lim = 30;
	//var x_lim = dist_lim;
	//var y_lim = dist_lim;
	// var swipeType = '';

	var dist = Math.sqrt(Math.pow(Pos1[0] - Pos2[0], 2)	+ Math.pow(Pos1[1] - Pos2[1], 2));

	if (dist > dist_lim) {
		if (Math.abs(Pos1[0] - Pos2[0]) > dist_lim) {
			if (Pos1[0] > Pos2[0]) {
				// swipeType= touchTypes.SWIPE_R;//' Right Swipe';
				msgPack.SwipeRight = 1;
			} else {
				// swipeType= touchTypes.SWIPE_L; //' Left Swipe';
				msgPack.SwipeLeft = 1;
			}
		}
	} else {
		// swipeType= touchTypes.PRESS;//" Press";
		msgPack.Press = 1;
		msgPack.ControlLevel = msgPack.ControlLevel===1 ? 0:1;
	}
}

var endTouchHandler = function(e) {
	endTouch = true;
	document.getElementById("canvas").style.backgroundColor = "white";
	document.getElementById("header").style.backgroundColor = "white";
	if(msgPack.ControlLevel>1){
		msgPack.ControlLevel = 0;
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
			msgPack.ControlLevel = msgPack.ControlLevel===1 ? 0:1;
		}
	
	}
	}

};

////////////////// Comms ////////////
ws.onclose = function() {
	console.error("Websocket Close");

	clearInterval(sensorInterval);
	clearInterval(commsInterval);
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
	// startIntervals();
};

ws.onmessage = function(msg) {
	console.log("message: " + msg.data);
	if (msg.data === "USER") {
		console.log("CONNECTED");
		ws.send("RUN");
		startIntervals();
		// commsInterval = setInterval(sysComms, commsInterval_T);
	}

};

function sysComms() {
	console.log("sysComms Send");
	ws.send(JSON.stringify(msgPack));
	if (!endTouch) {
		msgPack.reset(false);
	} else {
		msgPack.reset(true);
	}
	endTouch = false;

}

function startIntervals() {
	//console.log("Starting sensor");
	//startSensor();
	// startComms();
	console.log("Starting comms");
	commsInterval = setInterval(sysComms, commsInterval_T);
	// setInterval(commsInterval, commsInterval_T);
}

/*
function endIntervals(){
	clearInterval(sensorInterval);
	clearInterval(commsInterval);
	window.removeEventListener("rotarydetent", rotaryEventHandler, false);
}*/

//// System Events ///
function handleVisibilityChange() {
	console.log("Visibility Change");

	if (document[hidden]) {
		console.log("Page is now hidden.");
		clearInterval(sensorInterval);
		clearInterval(commsInterval);
		window.removeEventListener("rotarydetent", rotaryEventHandler, false);
		window.removeEventListener("devicemotion", onDeviceMotion);

		//ws.close();

	} else {
		console.log("Page is now visible. " + ws.readyState);
		window.addEventListener("rotarydetent", rotaryEventHandler, false);
		window.addEventListener("devicemotion", onDeviceMotion);

		ws.send("USER");
		
		// startIntervals();
	}
}

function control_back(ev) {
	console.log(ev.keyName);
	if (ev.keyName === "back") {
		//ws.close();
		console.log("back button pressed"); 
		clearInterval(sensorInterval);
		clearInterval(commsInterval);
		window.removeEventListener("rotarydetent", rotaryEventHandler, false);
		window.removeEventListener("tizenhwkey",control_back,false);
		window.removeEventListener("devicemotion", onDeviceMotion);
		document.removeEventListener(visibilityChange, handleVisibilityChange, false);
		
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
	} 
	
}

