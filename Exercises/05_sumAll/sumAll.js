const sumAll = function(num1, num2) {
    if (typeof num1 === "number" & typeof num2 === "number"){
        let sum = 0;
        let lowNum = Math.min(num1,num2);
        let highNum = Math.max(num1,num2);
        for (i = lowNum; i <= highNum; i++){
            sum += i;
        }
        if (sum < 0){
            return 'ERROR';
        } else {
            return sum;
        
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
