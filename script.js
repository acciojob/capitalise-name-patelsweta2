//your JS code here. If required.

const input = document.getElementById('fname');

input.addEventListener("blur", function(){
	let name = input.value;
	name = name.toUpperCase();
	input.value = name;
})