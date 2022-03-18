console.log("hello world");

function duckAlert(e) {
	alert(`Hello there`)
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted');
}
let imageDuck = document.querySelector(`img`)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
imageDuck.addEventListener(`mouseover`, duckAlert)