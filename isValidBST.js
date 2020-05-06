/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true

  const stack = []
  traverse(root, stack)
  let prev
  while (stack.length) {
    const element = stack.pop()
    if (element < prev) return false
    prev = element
  }
};

var traverse = function(root, stack) {
  if (root.left) traverse(root.left, stack)
  stack.push(root.val)
  if (root.right) traverse(root.right, stack)
}