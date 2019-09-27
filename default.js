var myUI;

myUI = {
	init: function(){
		var page = createEle("div"),
		    form = createEle("form"),
		    input = createEle("input"),
		    button = createEle("button");

		button.innerHTML = "enter";
		button.onclick = formValidate(input);

		input.type = "text";

		form.append(input,button);

		page.className = "page";
		page.append(form);
		
		body.append(page);
		
		setTimeout(function(){makeFull(page)},0);

	}
};

window.onload = function(){
	myUI.init();
};