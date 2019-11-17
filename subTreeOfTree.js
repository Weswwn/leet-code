/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s || !t) {
        return !s && !t
    }
    if (s.val === t.val && isEqual(s, t)) {
        return true;
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};

var isEqual = (sNode, tNode) => {
    if (!sNode || !tNode) {
        return sNode === tNode
    };
    if (sNode.val !== tNode.val) {
        return false;
    }
    if (sNode.val === tNode.val) {
        return isEqual(sNode.left, tNode.left) && isEqual(sNode.right, tNode.right)
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(3);
const leftLeaf = new TreeNode(4);
const rightLeaf = new TreeNode(5);
const node4 = new TreeNode(1);
const node5 = new TreeNode(2);

const root2 = new TreeNode(4);
const node7 = new TreeNode(1);
const node8 = new TreeNode(2);

root1.left = leftLeaf;
root1.right = rightLeaf;

leftLeaf.left = node4;
leftLeaf.right = node5;

root2.left = node7;
root2.right = node8;

console.log(isSubtree(root1, root2));

