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
var addTwoNumbers = function(l1, l2) {
    //Convert each linked list into a single number
    //Add both numbers together
    //Convert the combined number into a linked list
    var StrNum1 = '';
    var StrNum2 = '';
    
    var convertLinkedList = (node, tempStringResult = '') => {
        if (!node) {
            return tempStringResult;
        }
        tempStringResult.concat(node.val)
        convertLinkedList(node.next, tempStringResult);
    }
    StrNum1 = convertLinkedList(l1);
    StrNum2 = convertLinkedList(l2);
    StrNum1 = parseInt(StrNum1);
    StrNum2 = parseInt(StrNum2);
    
    console.log(StrNum1, StrNum2);
    
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var l1 = new ListNode(2);
var l2 = new ListNode(5);
var node1 = new ListNode(4);
var node2 = new ListNode(3);
var node3 = new ListNode(6);
var node4 = new ListNode(4);
l1.next = node1;
node1.next = node2;

l2.next = node3;
node3.next = node4;

