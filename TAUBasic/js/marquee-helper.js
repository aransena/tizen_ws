(function() {
var page = document.getElementById("snaplistTest"),
    list = document.getElementById("snapList"),
    listHelper;

page.addEventListener("pageshow", function() 
{
   listHelper = tau.helper.SnapListMarqueeStyle.create(list, {marqueeDelay: 1000});
});

page.addEventListener("pagehide", function() 
{
   listHelper.destroy();
});
}());