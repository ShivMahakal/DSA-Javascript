/**
 * Topic: Linked List Cycle Detection
 * Detect whether a linked list has a cycle (loop) in it.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Approach 1: Using Set — O(n) Time, O(n) Space
 */
function hasCycleSet(head) {
  const visited = new Set();

  let current = head;
  while (current) {
    if (visited.has(current)) {
      return true; // Cycle detected
    }
    visited.add(current);
    current = current.next;
  }

  return false;
}

/**
 * Approach 2: Floyd's Tortoise and Hare — O(n) Time, O(1) Space
 */
function hasCycleFloyd(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;       // moves 1 step
    fast = fast.next.next;  // moves 2 steps

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false;
}

/**
 * Find the start node of the cycle — O(n) Time, O(1) Space
 */
function findCycleStart(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  // Phase 1: Detect cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  if (!fast || !fast.next) return null; // No cycle

  // Phase 2: Find start of cycle
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow; // Start of cycle
}

// Example usage — Create a linked list with cycle
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates cycle at node2

console.log("Has Cycle (Set):", hasCycleSet(node1));       // true
console.log("Has Cycle (Floyd):", hasCycleFloyd(node1));   // true
console.log("Cycle starts at:", findCycleStart(node1).value); // 2

// No cycle example
const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
a.next = b;
b.next = c;

console.log("\nNo cycle list - Has Cycle?", hasCycleFloyd(a)); // false
