/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head;
    let pointer;
    let l1 = lists[0];
    
    if (lists.length < 1) {
        return null;
    }
    if (!lists[0] && lists.length === 1) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    if (!lists[0] && lists.length === 1) {
        return lists[1];
    } else if (!lists[1] && lists.length === 1) {
        return lists[0];
    }
    
    for (let i = 1; i <= lists.length - 1; i++) {
      if (head) {
          l1 = head;
      }
      let l2 = lists[i];
      if (!l1) {
          head = l2;
          pointer = head;
          l2 = l2.next;
      } else if (!l2) {
          head = l1;
          pointer = head;
          l1 = l1.next;
      } else
      if (l1.val <= l2.val) {
          head = l1;
          pointer = head;
          l1 = l1.next;
      } else {
          head = l2;
          pointer = head;
          l2 = l2.next;
      }
      while (l1 || l2) {
          console.log(head);
          if (!l1) {
              pointer.next = l2;
              pointer = pointer.next;
              break;
          } else if (!l2) {
              pointer.next = l1;
              pointer = pointer.next;
              break;
          }
          if (l1.val <= l2.val) {
              pointer.next = l1;
              l1 = l1.next; 
              pointer = pointer.next;
          } else {
              pointer.next = l2;
              l2 = l2.next;
              pointer = pointer.next;
          }
      }
    //   pointer.next = null;
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1n1 = new ListNode(2);
// var l1n2 = new ListNode(2);
// var l1n3 = new ListNode(3);
// l1n1.next = l1n2;
// l1n2.next = l1n3;
l1n1.next = null;

var l2n1 = null;
// var l2n2 = new ListNode(5);
// var l2n3 = new ListNode(6);
// var l2n4 = new ListNode(7);
// l2n1.next = l2n2;
// l2n2.next = l2n3;
// l2n3.next = l2n4;
// l2n4.next = null;

var l3n1 = new ListNode(-1)
l3n1.next = null;
// var l3n2 = new ListNode(6);

// l3n1.next = l3n2;
// l3n2.next = null;

// var l1n1 = null;
// var l2n1 = new ListNode(1);

console.log(mergeKLists([l1n1, l2n1, l3n1]));
// [[1,2,3],[4,5,6,7]]