/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
  return number1 + number2;
}
function addNumbers() {
  let number1 = Number(document.getElementById("add1").value);
  let number2 = Number(document.getElementById("add2").value);
  document.getElementById("sum").value = add(number1, number2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2){
  return subtract1 - subtract2;
}
function subtractNumbers() {
  let subtract1 = Number(document.getElementById("subtract1").value);
  let subtract2 = Number(document.getElementById("subtract2").value);
  document.getElementById("difference").value = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click",subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (a, b) => a * b;

let multiplyNumbers = () => {
  let factor1 = parseFloat(document.getElementById('factor1').value);
  let factor2 = parseFloat(document.getElementById('factor2').value);
  let product = multiply(factor1, factor2);
  document.getElementById('product').value = product;
};
document.getElementById("multiplyNumbers").addEventListener("click",multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
  return dividend / divisor;
}

function divideNumbers() {
  const dividend = document.getElementById("dividend").value;
  const divisor = document.getElementById("divisor").value;
  const quotient = divide(dividend, divisor);
  document.getElementById("quotient").value = quotient;
}
document.getElementById("divideNumbers").addEventListener("click",divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arr = Array.from({length: 13}, (_, i) => i + 1);
document.getElementById("array").innerHTML = arr;

/* Output Odds Only Array */
let odds = arr.filter(num => num % 2 !== 0);
document.getElementById("odds").innerHTML = odds;

/* Output Evens Only Array */

const evens = arr.filter(num => num % 2 === 0);
document.getElementById("evens").innerHTML = evens;

/* Output Sum of Org. Array */

let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById("sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
const multipliedArray = arr.map(x => x * 2);
document.getElementById("multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = arr.map(x => x * 2).reduce((acc, val) => acc + val);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;
