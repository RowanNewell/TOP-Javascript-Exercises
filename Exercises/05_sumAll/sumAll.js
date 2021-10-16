const sumAll = function(num1, num2) {

    // if(num1 < num2){
    //     let low = num1;
    //     let high = num2;
    // } else {
    //     let low = num2;
    //     let high = num1;
    // }

    let sum = 0;
    let low = num1;
    let high = num2;
    for (i = low; i <= high; i++){
        sum += i;
    }
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
