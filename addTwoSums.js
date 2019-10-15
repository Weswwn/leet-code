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
    
    var convertLinkedList = (node) => {
        var tempStringResult = '';
        if (!node) {
            return tempStringResult;
        }
        tempStringResult.concat(node.val)
        convertLinkedList(node.next);
    }
    StrNum1 = convertLinkedList(l1);
    StrNum2 = convertLinkedList(l2);
    StrNum1 = parseInt(StrNum1);
    StrNum2 = parseInt(StrNum2);
    
    console.log(StrNum1, StrNum2);
    
};