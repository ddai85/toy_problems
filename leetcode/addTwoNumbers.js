/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let initList = new ListNode();
  let totalList = initList;
  // Traverse through l1 and l2 until both are null
  let carryOne = 0;
  while (l1 !== null || l2 !== null) {
    if (l1 !== null && l2 !== null) {
      let sum = l1.val + l2.val + carryOne;
      if (sum < 10) {
        totalList.val = sum;
        carryOne = 0;
      } else {
        totalList.val = sum % 10;
        carryOne = 1;
      }

      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 === null) {
      let sum = l2.val + carryOne;

      if (sum < 10) {
        totalList.val = sum;
        carryOne = 0;
      } else {
        totalList.val = sum % 10;
        carryOne = 1;
      }

      l2 = l2.next;
    } else if (l2 === null) {
      let sum = l1.val + carryOne;
      if (sum < 10) {
        totalList.val = sum;
        carryOne = 0;
      } else {
        totalList.val = sum % 10;
        carryOne = 1;
      }

      l1 = l1.next;
    }

    if (l1 === null && l2 === null) {
      break;
    }

    totalList.next = new ListNode();
    totalList = totalList.next;
  }

  if (carryOne !== 0) {
    totalList.next = new ListNode();
    totalList = totalList.next;
    totalList.val = carryOne;
  }

  return initList;
};

// 342 and 465
// let currentL1 = new ListNode(3);
// let nextL1 = new ListNode(4);
// nextL1.next = currentL1;
// currentL1 = nextL1;
// nextL1 = new ListNode(2);
// nextL1.next = currentL1;

// let l1 = nextL1;

// let currentL2 = new ListNode(4);
// let nextL2 = new ListNode(6);
// nextL2.next = currentL2;
// currentL2 = nextL2;
// nextL2 = new ListNode(5);
// nextL2.next = currentL2;

let currentL1 = new ListNode(8);
let nextL1 = new ListNode(1);
nextL1.next = currentL1;

let l1 = nextL1;

let currentL2 = new ListNode(0);

let l2 = currentL2;

console.log(addTwoNumbers(l1, l2));
