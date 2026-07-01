/**
 * Topic: Middle of the Linked List
 * Problem: Given a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Time Complexity: O(n), Space Complexity: O(1)
function findMiddle(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  // fast moves 2 steps while slow moves 1 step
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // slow is now at the middle node
}

// Helper to build list
function buildList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

const list1 = buildList([1, 2, 3, 4, 5]);
console.log("Middle of [1,2,3,4,5]:", findMiddle(list1).val); // Output: 3

const list2 = buildList([1, 2, 3, 4, 5, 6]);
console.log("Middle of [1,2,3,4,5,6]:", findMiddle(list2).val); // Output: 4
