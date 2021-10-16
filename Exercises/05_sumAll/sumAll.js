const sumAll = function(num1, num2) {

    let sum = 0;
    let lowNum = Math.min(num1,num2);
    let highNum = Math.max(num1,num2);
    for (i = lowNum; i <= highNum; i++){
        sum += i;
    }
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
