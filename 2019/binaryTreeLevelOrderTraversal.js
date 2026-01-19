/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  let queue = [];
  let resultArray = [];
  resultArray.push([root.val]);
  queue.push(root.left), queue.push(root.right);
  while (queue.length > 0) {
      let length = queue.length;
      let tempArray = [];
      for (let i = 0; i < length; i++) {
          let curr = queue.shift();
          if (curr !== null) {
              tempArray.push(curr.val);
              queue.push(curr.left), queue.push(curr.right);
          }
      }
      if (tempArray.length > 0) {
          resultArray.push(tempArray);
      }
  }
  return resultArray;
};