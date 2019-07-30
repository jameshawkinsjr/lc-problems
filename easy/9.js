var isPalindrome = function(x) {
  
    if (x <= 9 && x >= 0) return true;
    
    let newNum = [];
    let nextNum = x;
    
    while (nextNum > 0) {
      newNum.push(nextNum % 10)
      nextNum = Math.floor(nextNum / 10);
    }
    
    if (parseInt(newNum.join("")) === x) return true;
    return false;
      
  };