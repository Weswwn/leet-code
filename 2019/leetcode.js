
var findTilt = function(root) {
    let answer = 0;
    var helper = function(node) {
        //Base case: when we reach the end of the tree for each node
        if (!node) {
            return 0;
        }

        let leftSum = helper(node.left);
        let rightSum = helper(node.right);
        node.val += leftSum + rightSum;
        answer += Math.abs((rightSum - leftSum));
        console.log(node.val);
        return node.val;
    }
    helper(root);
    return answer;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(1);
const leftLeaf = new TreeNode(2);
const rightLeaf = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);

root.left = leftLeaf;
root.right = rightLeaf; 
leftLeaf.left = node4;
// leftLeaf.right = node5;
rightLeaf.left = node5;
// rightLeaf.right = node7;

console.log(findTilt(root));
