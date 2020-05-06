/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(!head) return null
  let ogHead = head;
  let newHead = new ListNode()
  let cur = newHead
  
  const map = {}
  let i = 0
  while(head) {
      
      cur.val = head.val
      map[i] = cur
      head.id = i
      head = head.next
      
      if(head) {
          cur.next = new ListNode()
          cur = cur.next
      }
      i++
  }
  
  i = 0
  cur = newHead
  head = ogHead
  while (head) {
      if (head.random) {
          cur.random = map[head.random.id]
      } else {
          cur.random = null
      }
      cur = cur.next
      head = head.next
  }

  
  return newHead
};