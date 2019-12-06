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
    let preHead = new ListNode(0);
    let curr = preHead;
    if (lists.length === 1) return lists[0];
    
    let mergeHelper = (l1, l2) => {
        curr = preHead;
        while (l1 || l2) {
            if (!l1) {
                curr.next = l2;
                curr = curr.next;
                l2 = l2.next;
            } else if (!l2) {
                curr.next = l1;
                curr = curr.next;
                l1 = l1.next;
            } else if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
                curr = curr.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
                curr = curr.next;
            }
        }
        return preHead.next;
        
    }
    let root = lists[0];
    for (let i = 1; i < lists.length; i++) {
        root = mergeHelper(root, lists[i]);
    }
    return preHead.next;
};