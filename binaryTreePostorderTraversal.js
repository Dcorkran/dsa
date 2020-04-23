/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const order = []
  traverse(order, root)
  return order
};

var traverse = function(arr, node) {
  if(node) {
      traverse(arr, node.left);
      traverse(arr, node.right);
      arr.push(node.val);
  }
}