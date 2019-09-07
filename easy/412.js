var fizzBuzz = function(n) {
    let numberArray = [];
    for (i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            numberArray.push("FizzBuzz");
        } else if (i % 3 === 0){
            numberArray.push("Fizz");
        } else if (i % 5 === 0){
            numberArray.push("Buzz");
        } else {
            numberArray.push(i.toString());
        };
    };
    return numberArray;
};