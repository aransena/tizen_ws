/*global tau */
/*jslint unparam: true */
(function(tau) {
	var page,list, listHelper; 
		//elScroller;

	if (tau.support.shape.circle) {
		document.addEventListener("pagebeforeshow", function (e) {
			//document.getElementById("options_list").focus();
			page = e.target;
			//list = document.getElementById("options_list");
			list = page.querySelector(".ui-listview")

			if(list){
				/* Create SnapListView and binding rotary event using tau.helper */
	            listHelper = tau.helper.SnapListStyle.create(list);
				//listHelper = tau.helper.SnapListMarqueeStyle.create(list, {marqueeDelay: 1000});
			}
			/*elScroller = page.querySelector(".ui-scroller");
			if (elScroller) {
				elScroller.setAttribute("tizen-circular-scrollbar", "");
			}*/
		});

		document.addEventListener("pagebeforehide", function (e) {
			{
				listHelper.destroy();
			}
			
			/*if(elScroller) {
				elScroller.removeAttribute("tizen-circular-scrollbar");
				
			}*/
		});
	}
}(tau));
