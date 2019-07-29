function buildTree(preorder, inorder) {
    if (preorder.length === 0) return null;

    let rootNode = new TreeNode(preorder.shift()); // [3] && [9,20,15,7]
    let rootIndex = inorder.indexOf(rootNode.val); // 1 [9,3,15,20,7]
    inorder.splice(rootIndex,1); // [9,15,20,7]
    let leftInorder = inorder.slice(0, rootIndex); // [9]
    let rightInorder = inorder.slice(rootIndex); // [15,20,7]
    let leftPreorder = preorder.slice(0, leftInorder.length); // [9]
    let rightPreorder = preorder.slice(leftInorder.length); // [20,15,7]

    rootNode.left = buildTree(leftPreorder, leftInorder);
    rootNode.right = buildTree(rightPreorder, rightInorder);

    return rootNode;

}