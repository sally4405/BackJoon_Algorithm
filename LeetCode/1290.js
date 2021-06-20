// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// Convert Binary Number in a Linked List to Integer

var getDecimalValue = function (head) {
  let s = head.val.toString();
  let next = head.next;

  while (next !== null) {
    s += next.val;
    next = next.next;
  }

  return parseInt(s, 2);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// // const head = [1, 0, 1];
// const head = new ListNode(1, new ListNode(0, new ListNode(1)));
// // 5

// // const head = [0]
// const head = new ListNode(0);
// // 0

// // const head = [1]
// const head = new ListNode(1);
// // 1

// const head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
const head = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0)))))))))))))));
// 18880

// // const head = [0,0]
// const head = new ListNode(0, new ListNode(0));
// // 0

console.log(getDecimalValue(head));
