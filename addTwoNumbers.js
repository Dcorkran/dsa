/**
 * Definition for singly-linked list.
 * 
 * 
 * 
 * 
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const buildList = nodes => {
  let list = new ListNode(null);
  const head = list;
  for (let node of nodes) {
    list.next = new ListNode(node);
    list = list.next;
  }
  return head.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry;
  let list = new ListNode(null)
  const head = list
  while (l1 || l2) {
    let tempSum = 0
    if (l1) {
      tempSum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      tempSum += l2.val;
      l2 = l2.next;
    }
    if (carry) {
      tempSum += 1;
      carry = false;
    }
    if (tempSum > 9) {
      tempSum = tempSum % 10
      carry = true
    }
    list.next = new ListNode(tempSum)
    list = list.next
  }
  if (carry) list.next = new ListNode(1);
  return head.next
};

const l1 = buildList([5])
const l2 = buildList([5])


console.log(addTwoNumbers(l1, l2));