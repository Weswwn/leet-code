/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var nodeTracker = {};
    //If headA does not exist
    //If headB does not exist
    
    if (!headA) {
        return null;
    }
    if (!headB) {
        return null;
    }
    //Loop through everything once in headA and mark each node to signifiy that we have run into it before
    if (!headA['seen']) {
        headA['seen'] = true;
    }
    var recursion = (node) => {
        if (!node) {
            return;
        }
        if (node['seen'] === true) {
            return node;
        } else {
            node['seen'] = true;
            return recursion(node.next);
        }
    }
    recursion(headA.next);
    return recursion(headB.next);
};
function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var headA = new ListNode(4);
var headB = new ListNode(5);
var AN1 = new ListNode(1);
var AN2 = new ListNode(8);
var AN3 = new ListNode(4);
var AN4 = new ListNode(5);
var BN1 = new ListNode(0);
var BN2 = new ListNode(1);

headA.next = AN1;
AN1.next = AN2;
AN2.next = AN3;
AN3.next = AN4;

headB.next = BN1;
BN1.next = BN2;
BN2.next = AN2;

getIntersectionNode(headA, headB);