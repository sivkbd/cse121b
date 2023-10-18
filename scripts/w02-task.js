/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Siviwe Kibido';
const currentYear = '2023';
let profilePicture = 'images/image.jpg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('image');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

element.textContent = 'currentYear';

imageElement.setAttribute(src, 'profilePicture');

imageElement.setAttribute('alt', `Profile picture of ${fullName}`);


/* Step 5 - Array */

let favFood = ['Bread', 'Juice', 'Meat' ,'Chocolate'];

foodElement.innerHTML = favFood;

let favouriteFood = 'Yoghurt';

favFood.push(favouriteFood);

foodElement.innerHTML += `<br>${food}`;

favFood.shift();

foodElement.innerHTML += `<br>${food}`;

favFood.pop();

foodElement.innerHTML += `<br>${food}`;






