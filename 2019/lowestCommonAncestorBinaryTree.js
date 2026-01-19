/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return root;
  if (root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  return (left && right) ? root : (left || right);
};

function ListNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var l1 = new ListNode(3);
var l1n1 = new ListNode(5);
var l1n2 = new ListNode(1);
var l2 = new ListNode(6);
var l2n1 = new ListNode(0);
var l2n3 = new ListNode(2);
var l2n2 = new ListNode(8);
var l3n1 = new ListNode(7);
var l3n2 = new ListNode(4);

l1.left = l1n1;
l1.right = l1n2;
l1n1.left = l2;
l1n1.right = l2n3;
l2n3.left = l3n1;
l2n3.right = l3n1;
l1n2.left = l2n1;
l1n2.right = l2n2;
console.log(lowestCommonAncestor(l1, l3n1, l3n2));