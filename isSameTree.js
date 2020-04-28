var isSameTree = function(p, q) {
  return traverse (p, q)
};

var traverse = function(node1, node2) {
  if(!node1 && !node2) return true;
  if(!node1 || !node2) return false;
  if(node1.val === node2.val) {
      return traverse(node1.left, node2.left) && traverse(node1.right, node2.right)
  }
  return false;
}