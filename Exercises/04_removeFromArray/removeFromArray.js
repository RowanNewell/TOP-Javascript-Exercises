const removeFromArray = function(array, remove) {
    
    for(i = 0; i < array.length; i++){
            for (j = 1; j < arguments.length; j++){
                if(array[i] === arguments[j]){
                    console.log(arguments[j]);
                    array.splice(i, 1);
                    i--
                } else{
                    continue;
                }
            }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
