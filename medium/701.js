var insertIntoBST = function(root, val) {
  
    if ( val > root.val ) {
      if (root.right) {
        insertIntoBST( root.right, val )
      } else {
        root.right = new TreeNode(val)
      }
    } else if ( val < root.val) {
      if (root.left) {
        insertIntoBST( root.left, val )
      } else {
        root.left = new TreeNode(val)
      }
    }
    
    return root;
      
  };