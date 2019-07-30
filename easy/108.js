function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

let midIdx = Math.floor(nums.length / 2);
let left = nums.slice(0,midIdx);
let right = nums.slice(midIdx+1);
let newNode = new TreeNode(nums[midIdx]);
newNode.left = sortedArrayToBST(left);
newNode.right = sortedArrayToBST(right);

return newNode;
}