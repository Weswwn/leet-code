/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  var totalCount = Infinity;
  
  var recursiveCount = 0;
    if (!root) {
      return 0;
    }
  var recurse = (node, recursiveCount) => {
      if (!node) {
          return;
      }
    recursiveCount++;
      if (node.left === null && node.right === null) {
          if (recursiveCount < totalCount) {
            totalCount = recursiveCount;
            return;
          }
            return;
        }
        recurse(node.left, recursiveCount);
        recurse(node.right, recursiveCount);
    }
    recurse(root, recursiveCount);
    return totalCount;
};