
var largestValues = function(root) {
    if (!root) return [];
    
    let result = [];
    let currentRowVals = [];
    let currentRowNodes = [root];
    let nextRowVals = [];
    let nextRowNodes = [];
    
    while (currentRowNodes.length){
      currentRowNodes.forEach (node => {
        if (node){
          currentRowVals.push(node.val)
          nextRowNodes.push(node.left)
          nextRowNodes.push(node.right)
        }
      });
      if (currentRowVals.length){
        result.push(Math.max(...currentRowVals))
      }
      currentRowVals = nextRowVals
      currentRowNodes = nextRowNodes;
      nextRowVals = [];
      nextRowNodes = [];
    }
    return result
  
  };