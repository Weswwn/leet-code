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
var isSymmetric = function(root) {
  if (!root) return true;
  
  let helper = (l, r) => {
      if (!l && !r) return true;
      if (!l || !r || l.val !== r.val) return false;
      if (l.val === r.val) {
          return helper(l.left, r.right) && helper(l.right, r.left);
      }
  }
  return helper(root.left, root.right)
};