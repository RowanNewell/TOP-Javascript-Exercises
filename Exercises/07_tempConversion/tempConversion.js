const round = function(number){
    number = Math.round(number * 10)/10;
    return number
}

const ftoc = function(farenheittoc) {
    const ftocelsius = (farenheittoc - 32) * (5/9);
    return round(ftocelsius);
};

const ctof = function(celsiustof) {
    const ctofarenheit = celsiustof *(9/5) + 32;
    return round(ctofarenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
