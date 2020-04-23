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
var preorderTraversal = function(root) {
  const order = []
  traverse(order, root)
  return order
}

  
var traverse = function(arr, node) {
  if (node === null) return
  arr.push(node.val)
  if (node.left) traverse(arr, node.left)
  if (node.right) traverse(arr, node.right)
}