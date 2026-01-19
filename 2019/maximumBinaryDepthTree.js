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
var maxDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let maxDepth = 0;
  let queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while(queue.length > 0) {
      let length = queue.length;
      maxDepth++;
      for (let i = 0; i < length; i++) {
          let curr = queue.shift();
          if (curr) {
              queue.push(curr.left); 
              queue.push(curr.right);
          }
      }
  }
  return maxDepth;
};