const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = (array = []) => {
  let sum = array.reduce((sum, currNum) => {return sum + currNum}, 0);
  return sum;
};

const multiply = (numbers = []) => {
  let product = numbers.reduce((a, b) => {return a * b});
  return product;
};

const power = (num, exponent) => {
	return Math.pow(num,exponent);
};

const factorial = function factorial(number){
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
