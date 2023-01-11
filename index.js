const head = document.querySelector('h1');
const image = document.querySelector('img');
const clickbtn = document.querySelector('button');

 clickbtn.addEventListener('click',function () {
 	const randomNumber = Math.trunc(Math.random() * 2) + 1;
 	image.src = `images/${randomNumber}.jpg`;

 	if (randomNumber === 1) {
 		head.textContent = 'தளபதி';
 	}else{
 		head.textContent = 'தல';
 	}

 });