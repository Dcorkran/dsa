/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(!root) return null
  const serialized = []
  dfSerialize(root, serialized)
  return serialized
};

var dfSerialize = function (root, serialized) {
  if(!root) {
      serialized.push(null)
      return
  }
  serialized.push(root.val)
  dfSerialize(root.left, serialized)
  dfSerialize(root.right, serialized)
}

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if(!data) return null
  const nodeVal = data.shift()
  const head = new TreeNode(nodeVal)
  dfDeserialize(data, head)
  console.log(head)
  return head
};

dfDeserialize = function(data, root) {
  if(!data.length) return
  
  const leftNodeVal = data.shift()
  
  if (leftNodeVal !== null) {
      root.left = new TreeNode(leftNodeVal)
      dfDeserialize(data, root.left)
  }
  
  const rightNodeVal = data.shift()
  
  if (rightNodeVal !== null) {
      root.right = new TreeNode(rightNodeVal)
      dfDeserialize(data, root.right)        
  }
}

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/