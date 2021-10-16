const reverseString = function(str) {
    let splitString = str.split("");
    let splitStringArray = splitString.reverse();
    let joinArray = splitStringArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
