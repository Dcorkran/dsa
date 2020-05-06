var addTwoNumbers = function(l1, l2) {
  const head = new ListNode()
  traverse(l1, l2, head, 0)
  return head
}

var traverse = function (l1, l2, ans, carry) {
  let temp = carry
  
  if (l1) {
      temp += l1.val
      l1 = l1.next
  } 
  if(l2)  {
      temp += l2.val 
      l2 = l2.next
  }
  carry = 0
  
  if(temp >= 10) {
      temp = temp % 10
      carry = 1
  }

  ans.val = temp
  
  if (l1 || l2) {
      ans.next = new ListNode()
      traverse(l1, l2, ans.next, carry)
  } else {
      if (carry) {
          ans.next = new ListNode(1)
      }
      return
  }
}