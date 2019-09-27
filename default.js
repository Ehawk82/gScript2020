var myUI;

myUI = {
	init: function(){
		var page = createEle("div");

		page.className = "page";
		page.innerHTML = currentTime();
		
		body.append(page);
		
		setTimeout(function(){makeFull(page)},0);
		runTimer(page);
	}
};

window.onload = function(){
	myUI.init();
};