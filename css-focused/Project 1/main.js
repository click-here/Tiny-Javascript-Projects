document.addEventListener('click', function (e) {

	if (!e.target.matches('.box-thing')) return;
	e.preventDefault();

	var text = e.target.innerHTML.trim()

	if (!isNaN(text)) {
		text++
	}else{
		text = 1;
	}
	var div = document.createElement("div");
	div.className = "box-thing";
	div.innerHTML = text;
	e.target.parentElement.appendChild(div);


}, false);