/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var head = null;
    var checkPoint = head;
    if (!l1 && !l2) {
        return null;    
    }
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    
    if (l1.val > l2.val) {
        head = l2;
        checkPoint = head;
        l2 = l2.next;
    } else {
        head = l1;
        checkPoint = head;
        l1 = l1.next;
    }
    
    while(l1 || l2) {
        if (!l1) {
            checkPoint.next = l2;
            checkPoint = checkPoint.next;
            l2 = l2.next;

        }
        else if (!l1 && !l2) {
            return head;
        }
        else if (!l2) {
            checkPoint.next = l1;
            checkPoint = checkPoint.next;
            l1 = l1.next;
        }
        else if (!l1 && !l2) {
            return head;
        }

        else if (l1.val > l2.val) {
            checkPoint.next = l2;
            checkPoint = checkPoint.next;
            l2 = l2.next;
        } else {
            checkPoint.next = l1;
            checkPoint = checkPoint.next;
            l1 = l1.next;
        }
    }
    return head;
    
};

function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var l1 = new ListNode(-9);
var l1n1 = new ListNode(3);
// var l1n2 = new ListNode(4);
var l2 = new ListNode(5);
var l2n1 = new ListNode(7);
// var l2n2 = new ListNode(4);

l1.next = l1n1;
l1n1.next = null;
// l1n2.next = null;

l2.next = l2n1;
l2n1.next = null;
// l2n2.next = null;


console.log(mergeTwoLists(l1, l2));
