// /**
//  * @param {string} s
//  * @return {string}
//  */
var reverseWords = function(s) {
  
    let array = s.split(" ");
    let result = [];
    
    for (let i = array.length-1; i >= 0; i--){
      if (array[i] != ""){
        result.push(array[i]);
      }
    }
    
    return result.join(" ");
      
  };