

//HW Back Button Press Event - modified from app.js to unregister rotary
//handler from window //

/*
* window.addEventListener('tizenhwkey', function(ev) { if (ev.keyName ===
* "back") { console.log("back button pressed"); msgPack.BTN = 1; } });
*/

/*
* if(ws){ ws.close(); } document.removeEventListener("rotarydetent",
* rotaryEventHandler); var page = document.getElementsByClassName(
* 'ui-page-active' )[0], pageid = page ? page.id : "";
* 
* if( pageid === "pageMain" ) { try {
* tizen.application.getCurrentApplication().exit(); } catch (ignore) {
* console.error("error exiting program"); } } else { window.history.back(); }
*/
