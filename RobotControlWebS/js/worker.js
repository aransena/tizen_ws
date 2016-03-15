(function(tau) {

// Rotary Events //
var rotaryEventHandler = function(e)
{

	self.postMessage("here");
   if (e.detail.direction === "CW")
   {
	   //console.log("Rotate CW:\t'"+ ev_time);
	   //ws.send("CW\t"+ev_time);
	   //msgPack.CW=1;
	   self.postMessage("CW");
	   
   }
   else if (e.detail.direction === "CCW") 
   {
	   //console.log("Rotate CCW:\t"+tizen.time.getCurrentDateTime().getMilliseconds());
	   //ws.send("CCW\t"+ev_time);
	   //msgPack.CCW=1;
	   self.postMessage("CCW");
	   
   }
    
};

self.postMessage("hello");
self.addEventListener("tizenhwkey", rotaryEventHandler,false);

//console.log("worker started");
	


}());