/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let queue = [];
    if (!root) return null;
    let recurse = (node) => {
        if (!node) return;
        if (!node.left && !node.right) return
        let temp = node.right;
        node.right = node.left;
        node.left = temp;
        recurse(node.left);
        recurse(node.right);
    }
    recurse(root);
    return root;
};