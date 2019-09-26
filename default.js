var myUI;

myUI = {
	init: function(){
		var page = createEle("div"),
		    h = myHeight(),
		    w = myWidth(), cfsBtn = createEle("button");

		cfsBtn.innerHTML = "x";
		cfsBtn.onclick = closeFullScreen();

		page.className = "page";
		page.innerHTML = "demo page";
		page.onclick = openFullscreen();
		page.append(cfsBtn);
		
		body.append(page);
		setTimeout(function(){makeFull(page)},0);
	}
};

window.onload = function(){
	myUI.init();
};