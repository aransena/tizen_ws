////////// Main Variables //////////

//var WHEEL_CENTER_X = -(512-360)/2;
var WHEEL_CENTER_X = (360/2)-(256/2);
var WHEEL_CENTER_Y = WHEEL_CENTER_X;
var angle = 0;
var heading = 0

var commsInterval;
var timeOutInterval;
var timeOutInterval;
var uiInterval;

var commsInterval_T = 5;
var control_mode = window.localStorage.getItem('mode');

//var sensorInterval;
//var sensorInterval_T = 1000;

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

//var sensorService = tizen.sensorservice	|| (window.webapis && window.webapis.sensorservice) || null;
//var proximitySensor = sensorService.getDefaultSensor("LIGHT");
//var prev_LightSignal = 0;

//var bgd_color=""

var msgPack = {
	'Device' : 'SmartWatch',
	//'ControlLevel' :0,
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
		//this.ControlLevel = 0;
		// this.LGT = 0;
		if (all) {
			this.LongHold = 0;
			this.NumFingers = 0;
		}

	}
};


msgPack.Mode = control_mode;
/*
var touchTypes = {
	SWIPE_L : 1,
	SWIPE_R : 2,
	PRESS : 3
};*/

var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var page = document.getElementById("robotControl");


////////// Start Script //////////
console.log("connecting to, 2: " + url);
ws = new WebSocket(url);



/// Start Events ///
//startSensor();
//proximitySensor.start(onsuccessCB);
//startRotaryEventHandler();


///////// Control Screen GUI Setup ////////
canv.style.backgroundColor = "white";
//headr.style.backgroundColor = "white";

//Loading of the home test image - img1
var wheelImg = new Image();

//drawing of the test image - img1
wheelImg.onload = function () {
    //draw background image
	
	ctx.drawImage(wheelImg, WHEEL_CENTER_X, WHEEL_CENTER_Y);
	//draw a box over the top
    
    

};

//wheelImg.translate(-WHEEL_CENTER_X,-WHEEL_CENTER_Y);
wheelImg.src = 'img/wheel.png';

/*ctx.beginPath();
ctx.arc(180, 70, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();*/

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
	//var BetaTone = (float2int(msgPack.BETA)/10 * 255);
	//vib = Math.abs(float2int(msgPack.BETA));
	//console.log(parseInt(vib,10).toString());
	
	/*var check = parseInt(vib,10)
	
	if(check<4 && check >0){
			//navigator.vibrate([ 50, 1000, 50, 1000 ]);
		navigator.vibrate(10);
	}
	else if(check<6 && check >4){
			//navigator.vibrate([ 50, 450, 50, 450 ]);
		navigator.vibrate(100);
	}
	else if(check<8 && check >6){
			//navigator.vibrate([ 50, 400, 50, 400 ]);
		navigator.vibrate(500);
	}
	else if(check<10 && check >8){
			//navigator.vibrate([ 50, 350, 50, 350 ]);
		navigator.vibrate(1000);
	}
	
	else{
		navigator.vibrate([]);
	}*/
	
	
	/*if(BetaTone<0){
		BetaTone= 255 - BetaTone*-1;
		bgd_color="rgba("+BetaTone.toString()+",255, 255, 1)";
	}else{
		BetaTone= 255 - BetaTone;
		bgd_color= "rgba(255,"+BetaTone.toString()+", 255, 1)";
	}
	ctx.fillStyle = bgd_color;*/
	//ctx.drawImage(wheelImg, WHEEL_CENTER_X, WHEEL_CENTER_Y);
	//console.log(BetaTone.toString());
	
	//ctx.fillStyle = "rgba("tone.toString()",255, 255, 1)";
}

/*function float2int (value) {
    return value | 0;
}*/


//var cwCount=0;
//var ccwCount=0;

//var turn_del = 300;
//var timer_del = 2;
var timeOut = 300;
var sendVal = 0;
var maxTick = 150;//timeOut/timer_del;
var timerCount = maxTick;
var incrementSize = 15; // 15 degrees per bezel click
var time = new Date();
var curr_time = time.getTime;
var prev_time = time.getTime;
var abs_max_vel = 1;

//function cwSignal(){
//	console.log("CW LOW");
//	cwCount=0;
//	sendVal = 0;		
//	timerCount = 0;	
//	msgPack.Turn = sendVal.toString();
//	clearInterval(cwInterval);
//	clearInterval(timerInterval);
//}
//function ccwSignal(){
//	console.log("CCW LOW");
//	ccwCount=0;
//	sendVal = 0;
//	timerCount = 0;
//	msgPack.Turn = sendVal.toString();
//	clearInterval(ccwInterval);
//	clearInterval(timerInterval);
//}

//function timerSignal(){
//	timerCount=timerCount+1;
	
//	if(timerCount > maxTick){
//		timerCount = maxTick;
//		sendVal = 0.0;
//		msgPack.Turn = sendVal.toString();
//		clearInterval(timerInterval);
//	}
	
	//console.log("\t\t\t\t\tTimer count: "+timerCount.toString());
//}
function timeOutSignal(){
	timerCount = maxTick;
	sendVal = 0.0;
	msgPack.Turn = sendVal.toString();
	//clearInterval(timerInterval);
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
			//clearInterval(timerInterval);
			clearInterval(timeOutInterval);
			}
		catch(err){}
		
		if (e.detail.direction === "CW") {
			//sendVal = -50*(cwCount/timerCount);
			//sendVal = (maxTick-timerCount)/(-maxTick);
			//sendVal = -1-((timerCount)/(-maxTick));
			//sendVal = -1*(1-timerCount/(100-5));
			if(curr_time === prev_time){
				sendVal = -abs_max_vel;
			}
			else{
				sendVal = -incrementSize/(curr_time-prev_time);
			}
			if (sendVal < -abs_max_vel){
				sendVal = -abs_max_vel;
			}
		}	
		
		else{
			//sendVal = (maxTick-timerCount)/maxTick;
			//sendVal = 1-((timerCount)/(maxTick));
			//sendVal = 1-timerCount/(100-5);
			if(curr_time === prev_time){
				sendVal = abs_max_vel;
			}
			else{
				sendVal = incrementSize/(curr_time-prev_time);
			}
			//console.log("TURN: "+ sendVal.toString()); //+ "\t\tCNT: "+ timerCount.toString());
			
			if (sendVal > abs_max_vel){
				sendVal = abs_max_vel;
			}
			
			
			
		}
		//console.log("TURN: "+ sendVal.toString()); //+ "\t\tCNT: "+ timerCount.toString());
		
		msgPack.Turn =sendVal.toString();
		prev_time = curr_time;
		
		timerCount = 95;
		//timerInterval = setInterval(timerSignal, timer_del);
		timeOutInterval = setInterval(timeOutSignal, timeOut);
		
		
	}
	    
};

var center = 0;
//var rezero = 0;
//var rezero_step_size = 10;
//var rezero_step = rezero_step_size;
var run_avg = 0.0;
console.log("START: " + run_avg.toString());

function wheelImgInterval(){
	//ctx.fillStyle = bgd_color;
    //ctx.fillRect(0, 0, 500, 500);
	ctx.clearRect(0,0,ctx.width, ctx.height);
	ctx.translate(180,180);
	if(mode === "1"){
		ctx.rotate(_heading*-50 * Math.PI / 180);
	}
	else{
		var rot = 0.0;
		//rot = parseFloat(sendVal);//* 120 * (Math.PI / 180)*-1;
		//rot = -rot;
		rot = -sendVal*120*(Math.PI/180);
		//var temp = run_avg + rot;
		//average = parseFloat(run_avg);
		//run_avg = parseFloat(run_avg);
		if(isNaN(run_avg)){
			run_avg = 0.0;
		}
		run_avg = (run_avg*10 + rot)/11;
		console.log("RUN1: " + run_avg.toString()+ "\t\tRotation: " + rot.toString());
		//run_avg = run_avg.toFixed(3);
		//console.log("RUN2: " + run_avg.toString());
//		if (run_avg <= 0.005){
//			run_avg = 0.0;
//		}
		//rot = run_avg;
		/*if(rot == 0){
			rezero = center*-1
			ctx.rotate(rezero);
			center = 0;
		}
		else{*/
			ctx.rotate(center*-1);
			center = 0;
			center = center + run_avg;
			
			ctx.rotate(run_avg);
		//}
		if(Math.abs(run_avg)<0.1){
			run_avg = 0;
		}
		
		//console.log("RUN2: " + run_avg.toString());
		//console.log("Rotation: " + rot.toString()+ "\t\tSendVal: " + sendVal.toString());
	}
	
	ctx.translate(-180,-180);
	ctx.drawImage(wheelImg, WHEEL_CENTER_X, WHEEL_CENTER_Y);
}

/*

function startRotaryEventHandler() {
	
}*/

// ///// Light Sensor /////////
/*
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
}*/

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
			document.getElementById("canvas").style.backgroundColor = "#26a69a";
		//	document.getElementById("header").style.backgroundColor = "blue";
		} else if (touchCount === 1) {
			// touchType = "One Finger";
			document.getElementById("canvas").style.backgroundColor = "#80cbc4";
			//document.getElementById("header").style.backgroundColor = "red";
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
		//msgPack.ControlLevel = msgPack.ControlLevel===1 ? 0:1;
		msgPack.ControlLevel = 1;
	}
}

var endTouchHandler = function(e) {
	endTouch = true;
	document.getElementById("canvas").style.backgroundColor = "white";
	//document.getElementById("header").style.backgroundColor = "white";
	if(msgPack.ControlLevel>1){
		//msgPack.ControlLevel = 0;
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
			//msgPack.ControlLevel = msgPack.ControlLevel===1 ? 0:1;
			msgPack.ControlLevel=1;
		}
	
	}
	}

};

////////////////// Comms ////////////
ws.onclose = function() {
	console.error("Websocket Close");

	//clearInterval(sensorInterval);
	//clearInterval(commsInterval);
	try{
		clearInterval(commsInterval);
		}
		catch(err){}
		/*try{
			clearInterval(cwInterval);
		}
		catch(err){}
		try{
			clearInterval(ccwInterval);
		}
		catch(err){}*/
		
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
	// startIntervals();
};

ws.onmessage = function(msg) {
	//console.log("message: " + msg.data);
	if (msg.data === "USER") {
		console.log("CONNECTED");
		ws.send("RUN");
		startIntervals();
		// commsInterval = setInterval(sysComms, commsInterval_T);
	}
	else{
		try{
			//console.log("ELSE");
			var obj = JSON.parse(msg.data);
			heading = obj['heading'];
			//console.log("heading: ");
			
		}catch(err){
			console.log(err.message);
		}
		
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
	//console.log("Starting sensor");
	//startSensor();
	// startComms();
	console.log("Starting comms");
	commsInterval = setInterval(sysComms, commsInterval_T);
	uiInterval = setInterval(wheelImgInterval, 30);
	console.log("comms interval set");
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
		//clearInterval(sensorInterval);
		
		clearInterval(commsInterval);
		clearInterval(timeOutInterval);
		clearInterval(timeOutInterval);
		clearInterval(uiInterval);

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


