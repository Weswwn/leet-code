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
var isUnivalTree = function(root) {
    //Create a tracker that 
    //If root is null return false and break out
    var valueTracker = 0;
    if (!root) return false;
    valueTracker = root.val;

    var helper = (node) => {
        if (!node) {
            return 1
        }
        if (node.val !== valueTracker) {
            return false;   
        }
        var leftVal = helper(node.left);
        if (leftVal === false) return false;
        var rightVal = helper(node.right);
        if (rightVal === false) return false;

        return true;
    }
    return helper(root);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(1);
const leftLeaf = new TreeNode(1);
const rightLeaf = new TreeNode(1);
const node4 = new TreeNode(1);
const node5 = new TreeNode(1);
const node6 = new TreeNode(1);
const node7 = new TreeNode(2);
const node8 = new TreeNode(1);

root.left = leftLeaf;
root.right = rightLeaf;

leftLeaf.left = node4;
leftLeaf.right = node5;

// rightLeaf.left = node6; 
rightLeaf.right = node7

console.log(isUnivalTree(root));
