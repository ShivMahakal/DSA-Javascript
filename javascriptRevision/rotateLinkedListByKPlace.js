// Problem kya keh raha hai?

// Tumhe ek linked list di hui hai aur ek number k diya hai.

// 👉 Tumhe list ko right side mein k steps rotate karna hai.

// 🔸 Rotate right ka matlab kya hota hai?

// Right rotate ka matlab:

// Last ke elements ko uthake front mein le aana

// 🔥 Example samajho
// Input:
// 1 → 2 → 3 → 4 → 5
// k = 2
// Step by step:
// 1st rotation:
// 5 → 1 → 2 → 3 → 4
// 2nd rotation:
// 4 → 5 → 1 → 2 → 3
// ✅ Output:
// 4 → 5 → 1 → 2 → 3
// 🧠 Simple Language Mein

// 👉 “List ke last ke k nodes ko uthao aur front mein chipka do”

// 🔹 Edge Cases (important)
// Agar k = 0 → list same rahegi
// Agar k = length → list same rahegi
// Agar k > length →
// 👉 actually k % length use karte hain

// ✅ Final Samajh
// List ko todna hai ek jagah se
// Last part ko front mein laana hai
// Baaki list ko uske baad attach karna hai

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Count the length of the linked list
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Make it a circular list
  tail.next = head;

  // Step 3: Find the new tail: (length - k % length - 1)th node
  // and new head: (length - k % length)th node
  k = k % length;
  let stepsToNewHead = length - k;

  let newTail = tail;
  while (stepsToNewHead--) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}

// Helper function to test this
// Converts array to linked list
function arrayToList(arr) {
  const dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Converts linked list to array
function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test function
function testRotation(arr, k) {
  const list = arrayToList(arr);
  const rotatedList = rotateRight(list, k);
  return listToArray(rotatedList);
}

// Example of Test Cases
console.log(testRotation([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(testRotation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2)); // [10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(testRotation([1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5]
console.log(testRotation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], 8)); // [3, 4, 5, 6, 7, 8, 9, 10, 12, 1, 2]
