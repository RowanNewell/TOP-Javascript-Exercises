const add = function() {
  let addition = 0;
    for (i = 0; i < arguments.length; i++){
    addition = addition + arguments[i];
  } 
  return addition;
};

const subtract = function() {
  let sub = arguments[0];
    for (i = 1; i < arguments.length; i++){
    sub = sub - arguments[i];
  } 
  return sub;
};

const sum = function(sumArray) {
	let sumVal = 0;
    for (i = 0; i < sumArray.length; i++){
      sumVal = sumVal + sumArray[i];
  } 
  return sumVal;
};

const multiply = function(multArray) {
  let mult = 1;
    for (i = 0; i < multArray.length; i++){
      mult = mult * multArray[i];
  } 
  return mult;
};

const power = function() {
	
};

const factorial = function() {
	
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
