(function(tau) {
	console.log("tjhest");

	document.addEventListener("pagebeforeshow", function (e) {
	var page = e.target,	
	list = page.querySelector("snapList"),
    listHelper;

page.addEventListener("pageshow", function() 
{
   //listHelper = tau.helper.SnapListMarqueeStyle.create(list, {marqueeDelay: 500});
});

page.addEventListener("pagehide", function() 
{
   //listHelper.destroy();
});
});
}());