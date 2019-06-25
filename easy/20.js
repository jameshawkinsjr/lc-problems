// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function(s) {
    let strArray = s.split("");
    let stack = [];
    
    for (let i = 0; i < strArray.length; i++){
      if ( [ "(" , "[" , "{" ].includes( strArray[i] ) ) {
        stack.push(strArray[i]);
      } else if ( [")","}","]"].includes(strArray[i]) ){
       if (stack.length === 0) return false;
       if (strArray[i] === ']' && stack[stack.length-1] != '[') return false;
       if (strArray[i] === ')' && stack[stack.length-1] != '(') return false;
       if (strArray[i] === '}' && stack[stack.length-1] != '{') return false;
       stack.pop();
      }
    }
    if (stack.length === 0) return true;
    return false;     
  };