var findAndReplacePattern = function(words, pattern) {
    let result = [];
    let patternCheck = convertToArr(pattern)
    
    words.forEach( word => {
      if (patternCheck === convertToArr(word)) result.push(word);
    })
    
    return result;
      
  };
  
  
  const convertToArr = function(pattern){
    let result = [];
    let temp = [];
    let chars = pattern.split("");
    
    chars.forEach( letter => {
      temp.push(letter)
      result.push(temp.indexOf(letter));
    })
    return result.join("");
  }