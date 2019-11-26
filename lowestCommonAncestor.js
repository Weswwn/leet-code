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
  let recurse = (node, p , q) => {
      if (node.val >= p.val && node.val <= q.val) {
          return node.val; 
      }
      if (node.val > p.val && node.val > q.val) {
          recurse(node.left);
      }
      if (node.val < p.val && node.val < q.val) {
          recurse(node.right);
      }
  }
  return recurse(root, p , q);
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(6);
var l1n1 = new ListNode(2);
var l1n2 = new ListNode(8);
// var l2 = new ListNode(5);
// var l2n1 = new ListNode(7);
// var l2n2 = new ListNode(4);

l1.left = l1n1;
l1.right = l1n2;
// l1n1.next = null;
// l1n2.next = null;

// l2.next = l2n1;
// l2n1.next = null;
// l2n2.next = null;

console.log(lowestCommonAncestor(l1, l1n1, l1n2));