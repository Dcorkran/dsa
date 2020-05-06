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
var isSymmetric = function(root) {
  return checkSymmetric(root, root)
};

var checkSymmetric = function (lRoot, rRoot) {
  if(!lRoot && !rRoot) return true
  if(!lRoot || !rRoot) return false
  if(lRoot.val !== rRoot.val) return false
  return checkSymmetric(lRoot.left, rRoot.right) && checkSymmetric(rRoot.left, lRoot.right)
}