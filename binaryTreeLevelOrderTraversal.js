/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const order = [];
  traverse(order, root, 0)
  return order
};

var traverse = function (order, node, level) {
  if (node) {
      if (!order[level]) order[level] = [];
      order[level].push(node.val)
      if (node.left) traverse(order, node.left, level + 1)
      if (node.right) traverse(order, node.right, level + 1) 
  }
  
  
}