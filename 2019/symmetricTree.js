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
    let isSym = true;
    if (!root) return true;
    let recurse = (leftNode, rightNode) => {
        if (!leftNode && rightNode) {
            isSym = false;
            return;
        }
        if (leftNode && !rightNode) {
            isSym = false;
            return;
        }
        if (!leftNode && !rightNode) {
            return;
        }
        if (leftNode.val !== rightNode.val) {
            isSym = false;
            return;
        }
        recurse(leftNode.left, rightNode.right)
        if (isSym === false) return isSym;
        recurse(leftNode.right, rightNode.left);
    }
    recurse(root.left, root.right)
    return isSym;
};