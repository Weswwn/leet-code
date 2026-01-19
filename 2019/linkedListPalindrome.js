/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //If list does not exist
    var pointer = head;
    if (!head) {
        return null;
    }
    if (!head.next) {
        return true;
    }
    var recursion = (pointer) => {
        if (!pointer.next || pointer.next.val === true) {
            if (head.val === pointer.val) {
                if (head.next === pointer) {
                    return true;
                } else {
                    pointer.val = true;
                    head = head.next;
                    if (head.next === pointer) {
                        return true;
                    } else {
                        pointer = head;
                        return recursion(pointer.next);
                    }
                }
            } else {
                return false;
            }
        } else {
            return recursion(pointer.next);
        }
    }
    return recursion(pointer.next)

};