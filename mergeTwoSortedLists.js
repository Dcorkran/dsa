var mergeTwoLists = function(l1, l2) {
  const head = new ListNode()
  let ans = head

  while(l1 || l2) {
      if (!l1) {
          ans.next = l2;
          l2 = l2.next
      }
      else if (!l2) {
          ans.next = l1;
          l1 = l1.next
      } else {
          if (l1.val < l2.val) {
              ans.next = l1;
              l1 = l1.next
          } else {
              ans.next = l2;
              l2 = l2.next
          }
      }
      ans = ans.next
  }
  return head.next
};