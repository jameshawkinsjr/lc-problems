/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    if (secret === guess) return `${secret.length}A0B`
    
    let bulls = 0;
    let cows = 0;
    
    let secretArr = secret.split("")
    let guessArr = guess.split("")
    
    let indexes = [];
    for (let i = 0; i < secretArr.length; i++){
      if ( secretArr[i] === guessArr[i] ) {
        indexes.push(i)
        bulls++;
      }
    }
    
    indexes.forEach( (index,idx) => {
      secretArr.splice(index-idx,1)
      guessArr.splice(index-idx,1)
    })
    
    console.log(secretArr, guessArr)
    
    for (let i = 0; i < guessArr.length; i++){
      let index = secretArr.indexOf(guessArr[i])
      if ( index >= 0) {
        secretArr.splice(index,1)
        cows++;
      }
    }
    
    return `${bulls}A${cows}B`  
  };