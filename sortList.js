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
var sortList = function(head) {
    let hPointer = head;
    let hHead = new ListNode(Infinity);
    while (hPointer !== null) {
        if (hPointer.val < hHead.val) {
            hHead = hPointer;
            hPointer = hPointer.next;
        } else {
            hPointer = hPointer.next;   
        }
    } 
    let pointer = head
    let pointer2 = head.next;
    let changeMade = false;
    let sort = (pointer, pointer2) => {
        let count = 0;
        while (pointer2 !== null) {
            if (pointer.val > pointer2.val && count === 0) {
                console.log('hi')
                let temp = pointer2.next;
                pointer2.next = pointer;
                pointer.next  = temp;
                head = pointer2;
                console.log(head);
                count++;
                changeMade = true;
            } else if (pointer.val > pointer2.val && count !== 0) {
                let temp = pointer2.next;
                pointer2.next = pointer;
                pointer  = temp;
                count++;
                changeMade = true;
            }
            if (pointer.next !== null) {
                pointer = pointer.next;
                pointer2 = pointer.next;
            }
        }
        if (changeMade) {
            sort(head, head.next)
        }
    }
    sort(pointer, pointer2)
    return hHead;
};