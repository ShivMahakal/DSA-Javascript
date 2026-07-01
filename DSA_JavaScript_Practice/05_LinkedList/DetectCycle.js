/**
 * Topic: Linked List Cycle Detection (Floyd's Cycle-Finding Algorithm)
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Problem 1: Detect if a cycle exists (Linked List Cycle I)
 * Returns true if cycle exists, else false.
 */
function hasCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;       // tortoise moves 1 step
    fast = fast.next.next;  // hare moves 2 steps

    if (slow === fast) {
      return true; // Met inside the cycle loop
    }
  }

  return false;
}


/**
 * Problem 2: Find the starting node of the cycle (Linked List Cycle II)
 * Returns the ListNode where the cycle starts, or null if there's no cycle.
 */
function detectCycleStartNode(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // Cycle detected
    if (slow === fast) {
      let pointer = head;

      // Find the start node of the cycle
      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
      }
      return pointer;
    }
  }

  return null;
}

// Setup a list: 3 -> 2 -> 0 -> -4 -> 2 (cycle)
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // loop points back to node2

console.log("Has cycle?", hasCycle(node1)); // true
let cycleStart = detectCycleStartNode(node1);
console.log("Cycle starts at node value:", cycleStart ? cycleStart.val : "No Cycle"); // 2
