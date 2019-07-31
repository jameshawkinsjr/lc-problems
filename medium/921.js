var minAddToMakeValid = function(S) {
  
    let parenStack = [];
    let parenNeeded = 0;
    let array = S.split("");
    
    for (let i = 0; i < array.length; i++){
      if (array[i] === "("){
        parenStack.push(array[i]);
      } else {
        if (parenStack.length){
          parenStack.pop();
        } else {
          parenNeeded++;
        }
      }
    }
    return parenNeeded + parenStack.length;
  };