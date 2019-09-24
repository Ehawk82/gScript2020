var myUI;

myUI = {
	init: function(){
		var page = createEle("div"),
		    h = myHeight(),
		    w = myWidth();

		page.className = "page";
		page.innerHTML = h + "px | " + w + "px";

		body.append(page);
		
		setTimeout(function(){
			makeFull(page);
			var mH = thisHeight(page), mW = thisWidth(page);

			var newString = " & " + mH + "px | " + mW + "px";
			page.append(newString);
			setTimeout(function(){
				var pageString = page.innerHTML,
				    h1 = createEle("h1");

				h1.innerHTML = pageString;

				page.innerHTML = "";

				page.append(h1);
			},0);
		}, 0);
	}
};

window.onload = function(){
	myUI.init();
};