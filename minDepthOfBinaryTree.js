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
    
    var recursiveCount = 1;
    var recurse = (node, recursiveCount) => {
        if (!node) {
            return;
        }
        recursiveCount++;
        recurse(node.left);
        recurse(node.right);
        if (recursiveCount < totalCount) {
            totalCount = recursiveCount;
        }
    }
    recurse(root, recursiveCount);
    return totalCount;
};