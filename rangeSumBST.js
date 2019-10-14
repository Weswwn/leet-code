var rangeSumBST = function(root, L, R) {
    var totalSum = 0;
    
    if (!root) return totalSum;
    if (root.val >= L && root.val <= R) totalSum += root.val
    
    var helper = (node) => {
        if (!node) return
        if (node.val >= L && node.val <= R) totalSum += node.val;
        
        helper(node.left);
        helper(node.right);
    }
    helper(root);
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