/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let L = head, R = head, temp = head;
  let p1 = head, p2 = p1.next, p3 = p2.next;
  let tempK = k;
  
  while (R) {
      while (tempK > 0) {
          if (!R.next) return head;
          R = R.next;
          tempK--;
      }
      p3.next = p2;
      p2.next = p1;
      p1.next = R;
      if (L.val === temp.val) {
          head = p3;
          L.next = R;
          L = R;
          console.log(R);
      } else {
          p1 = L;
          p2 = p1.next;
          p3 = p2.next;
          p3.next = p2;
          p2.next = p1;
          p1 = R;
          temp.next = p3;
          L.next = R;  
      }
      tempK = k;
  }
};