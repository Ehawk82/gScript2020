var myUI;

myUI = {
	init: function(){
		var page = createEle("div"),
		    h = myHeight(),
		    w = myWidth();

		page.className = "page";
		page.innerHTML = "demo page";
		page.onclick = openFullscreen();

		body.append(page);
		setTimeout(function(){makeFull(page)},0);
	}
};

window.onload = function(){
	myUI.init();
};