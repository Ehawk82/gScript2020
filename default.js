var myUI;

myUI = {
	init: function(){
		var page = createEle("div");

		page.className = "page";
		page.innerHTML = "demo page";
		
		body.append(page);
		
		setTimeout(function(){makeFull(page)},333);
	}
};

window.onload = function(){
	myUI.init();
};