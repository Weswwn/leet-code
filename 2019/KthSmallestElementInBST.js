/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let target = null;
    if (!root) return null;
    let count = 0;
    let recurse = (node) => {
        if (target !== null) {
            return;
        }
        if (!node) return;
        recurse(node.left);
        count++;
        // console.log(count, node.val);
        if (count === k) {
            target = node.val;
            return;
        }
        recurse(node.right);
    }
    recurse(root);
    return target;
};