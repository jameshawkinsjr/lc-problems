// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */

var numJewelsInStones = function(J, S) {
    let numJewels = 0;
    let jewelArray = J.split('');
    let stoneArray = S.split('');
    for (let i = 0; i < S.length; i++){
        for (let j = 0; j < J.length; j++){
            if (stoneArray[i] === jewelArray[j]){
                numJewels++;
            }
        }
    }
    return numJewels;
};