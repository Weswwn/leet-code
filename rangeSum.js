/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    var resultNode = null;
    if (!root) return null
    if (root.val === val) return root
    
    var helper = (node) => {
        if (!node) return
        if (node.val === val) {
            resultNode = node;
        }
        
        helper(node.left);
        if (resultNode !== null) {
            return resultNode;
        }
        helper(node.right);
        return resultNode;
    }
    return helper(root)
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(4);
const leftLeaf = new TreeNode(2);
const rightLeaf = new TreeNode(7);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);

root.left = leftLeaf;
root.right = rightLeaf;

leftLeaf.left = node4;
leftLeaf.right = node5;

// rightLeaf.left = node6; 
// rightLeaf.right = node6;

console.log(searchBST(root, 2));