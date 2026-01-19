
//  Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

 

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var temp = head;
    var firstPointer = head.next.next;
    head = head.next;

    head.next = temp;
    temp.next = null;
    if (firstPointer === null) {
        return head;
    }
    var recursion = (node) => {
        temp = node;
        node = firstPointer;
        firstPointer = firstPointer.next;
        node.next = temp;
        if (firstPointer === null) {
            console.log(firstPointer);
            return node;
        }
        return recursion(node)
    }
    return recursion(head) 
    
};

var head = new ListNode(1);
var node1 = new ListNode(2);
var node2 = new ListNode(3);
var node3 = new ListNode(4);
var node4 = new ListNode(5);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

console.log(reverseList(head));

