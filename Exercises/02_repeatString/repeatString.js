const repeatString = function(string, num) {
    
    let hey = string;
    let heyString = ''
    console.log(num);
    if (num < 0){
        return 'ERROR';
    } else {
    for (let i = 0; i < num; i++){
        console.log('num loop' + num);        
        heyString = heyString + hey;
        console.log(i) 
        console.log(heyString) ;     
    }
    return heyString;
}
};

// Do not edit below this line
module.exports = repeatString;
