var myUI;

myUI = {
	init: function(){
		var page = createEle("div");

		page.className = "page_full";
		page.innerHTML = "talkings";

		body.append(page);
		
	}
};

window.onload = function(){
	myUI.init();
};