/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let L = dummyHead;
  let R = dummyHead;
  let count = 0;
  if (head.next === null) {
      return null;
  }
  for (let i = 1; i <= n + 1; i++) {
      R = R.next;
  }
  while (R !== null) {
      L = L.next;
      R = R.next;
  }
  L.next = L.next.next;
  return dummyHead.next;
  
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new ListNode(1);
var node1 = new ListNode(2);
// var node2 = new ListNode(3);
// var node3 = new ListNode(4);
// var node4 = new ListNode(5);
head.next = node1;
node1.next = null;
// node2.next = null;
// node3.next = node4;
// node4.next = null;

console.log(removeNthFromEnd(head, 1));