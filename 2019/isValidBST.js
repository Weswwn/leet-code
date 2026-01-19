/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return null;
  let recurse = (min, max, node) => {
      if (!node) return true;
      if (node.val <= min || node.val >= max) {
          return false;
      }
      return recurse(min, node.val, node.left) && recurse(node.val, max, node.right);
  }
  return recurse(-Infinity, root.val, root.left) && recurse(root.val, Infinity, root.right);
};