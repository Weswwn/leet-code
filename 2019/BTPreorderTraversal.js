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
  let result = [];
  const recurse = (node) => {
      if (!node) return;
      result.push(node.val)
      
      recurse(node.left);
      recurse(node.right);
      
  }
  recurse(root)
  return result;
};