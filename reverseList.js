/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null
  
  let revHead = new ListNode()
  let cur = head

  while(cur) {
      revHead.val = cur.val
      if (cur.next) {
          const revNode = new ListNode()
          const temp = revHead
          revHead = revNode
          revNode.next = temp
      }
      cur = cur.next  
  }
  
  return revHead
};

var reverseList = function(head) {
  let cur = head;
  let prev = null

  while (cur) {
    const temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
};