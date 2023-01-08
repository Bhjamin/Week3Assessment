console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('It has been submitted')
}

const complimentTime = () => {
 alert('You are very very smart')
}


let form = document.querySelector('#contact');
let Catpic = document.querySelector('#cat')


form.addEventListener('submit', handleSubmit);
Catpic.addEventListener('mouseover', complimentTime)