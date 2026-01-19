/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let totalSum = 0;  
    let recurse = (node) => {
        if (!node) {
            return;
        }
        if (node.val > R) {
            recurse(node.left);
        }
        if (node.val >= L && node.val <= R) {
            // console.log(node.val)
            totalSum += node.val
            recurse(node.left);
            recurse(node.right);
            // return;
        } else if (node.val < L) {
            recurse(node.right);
            console.log('hi');
        }
    }
    recurse(root);
    return totalSum;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(10);
const leftLeaf = new TreeNode(5);
const rightLeaf = new TreeNode(15);
const node4 = new TreeNode(3);
const node5 = new TreeNode(7);
const node6 = new TreeNode(18);
const node7 = new TreeNode(2);

root.left = leftLeaf;
root.right = rightLeaf;

leftLeaf.left = node4;
leftLeaf.right = node5;

// rightLeaf.left = node6; 
rightLeaf.right = node6;

console.log(rangeSumBST(root, 7, 15));