/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummyHead = new ListNode(0);
  if (!head) return null;
  if (!head.next) return head;
  
  let temp = head.next.next;
  dummyHead.next = head.next;
  head.next.next = head;
  head.next = temp;
  
  let prev = head;
  let curr = head.next;
  
  while(curr) {
      if (!curr.next || !curr) {
          return dummyHead.next;
      }
      let temp = curr.next.next;
      prev.next = curr.next;
      curr.next.next = curr;
      curr.next = temp;
      prev = curr;
      curr = curr.next;
  }
  return dummyHead.next;
};