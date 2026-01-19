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
var inorderTraversal = function(root) {
  const result = [];
  const recurse = (node) => {
      if (!node) return;
      
      recurse(node.left);
      result.push(node.val);
      recurse(node.right);
  }
  recurse(root)
  return result;
};