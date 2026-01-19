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
        tempStringResult = node.val + tempStringResult;
        return convertLinkedList(node.next, tempStringResult);
    }
    StrNum1 = convertLinkedList(l1);
    StrNum2 = convertLinkedList(l2);
    console.log('Before conversion:', StrNum1, StrNum2)
    StrNum1 = BigInt(StrNum1);
    StrNum2 = BigInt(StrNum2);
    console.log(StrNum1, StrNum2);
    
    var totalSum = StrNum1 + StrNum2;
    console.log('Sum:', totalSum);
    // var head = new ListNode(totalSum % 10);
    // var pointer = head;
    // totalSum = Math.floor(totalSum / 10);
    // while(totalSum) {
    //     pointer.next = new ListNode(totalSum % 10);
    //     pointer = pointer.next;
    //     totalSum = Math.floor(totalSum / 10);
    // }
    // pointer.next = null;
    // return head;
    totalSum = totalSum.toString();
    var firstNumber = Number(totalSum[totalSum.length - 1]);
    var head = new ListNode(firstNumber)
    var pointer = head;
    console.log(head);
    for (var i = totalSum.length - 2; i > -1; i--) {
        var valueConverter = Number(totalSum[i])
        pointer.next = new ListNode(valueConverter);
        pointer = pointer.next;
    }
    return head;
};