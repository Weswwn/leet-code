var removeNthFromEnd = function(head, n) {
  var nullHead = new ListNode(null);
  nullHead.next = head;
  var p1 = nullHead;
  var p2 = nullHead;
  
  for(var i = 0; i < n + 1; i++)
      p1 = p1.next;
  while(p1 !== null){
      p2 = p2.next;
      p1 = p1.next;
  }
  p2.next = p2.next.next;
  return nullHead.next;
};