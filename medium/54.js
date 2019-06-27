// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
var spiralOrder = function(matrix) {
  
    let result = [];
    
    while (matrix.length) {
      
      let firstRow = matrix.shift();
      let lastRow = matrix.pop();
      
      result = result.concat(firstRow);
      
      for (let i = 0; i < matrix.length; i++){
         let curr = matrix[i].pop()
        if (curr){
          result.push(curr);
        }
      }
      
      if (lastRow) {
        let len = lastRow.length
        for (let i = 0; i < len; i++){
          let curr = lastRow.pop()
          result.push(curr);
        }
      }
      
      for (let i = matrix.length-1; i >= 0; i--){
        let curr = matrix[i].shift() 
        if (curr){
          result.push(curr);
        }
      }
      
    }
      
    return result;
  };