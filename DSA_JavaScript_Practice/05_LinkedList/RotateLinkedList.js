/**
 * Topic: Rotate Linked List Right by K places
 * Problem: Given the head of a linked list, rotate the list to the right by k places.
 * Example: 1->2->3->4->5, k=2 becomes 4->5->1->2->3.
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Time Complexity: O(n), Space Complexity: O(1)
function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Count the length and find tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Make it circular
  tail.next = head;

  // Step 3: Find new tail and head position
  k = k % length;
  let stepsToNewHead = length - k;

  let newTail = tail;
  while (stepsToNewHead--) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null; // break the cycle

  return newHead;
}

// Helpers
function arrayToList(arr) {
  const dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

console.log("Rotate [1,2,3,4,5] by 2:", listToArray(rotateRight(arrayToList([1, 2, 3, 4, 5]), 2))); // [4, 5, 1, 2, 3]
