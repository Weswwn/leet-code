/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let isSame = true;
    if (!p && q) return false;
    if (p && !q) return false;
        
    let recurse = (pNode, qNode) => {
        if (!pNode && qNode) {
            isSame = false;
            return;
        }
        if (pNode && !qNode) {
            isSame = false;
            return;
        }
        if (!pNode && !qNode) {
           return;
        }
        if (pNode.val !== qNode.val) {
            isSame = false;
            return;
        }
        
        recurse(pNode.left, qNode.left);
        if (isSame === false) return isSame;
        recurse(pNode.right, qNode.right);
    }
    recurse(p,q);
    return isSame;
};