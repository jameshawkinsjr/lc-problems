/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = s.split("");
    let set = new Set();
    
    for (let i = arr.length-1; i >=0; i--){
      let char = arr[i];
      let index = arr.indexOf(char);
      if (index != i) return index;
    }
    return -1;
  };