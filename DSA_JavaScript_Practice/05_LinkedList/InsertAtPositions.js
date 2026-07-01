/**
 * Topic: Insert at Different Positions in Linked List
 * Insert a new node at the start, middle (after a given position), and end.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Insert at the beginning — O(1) Time
   */
  insertAtStart(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  /**
   * Insert at the end — O(n) Time
   */
  insertAtEnd(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  /**
   * Insert at a specific position (0-indexed) — O(n) Time
   */
  insertAtPosition(value, position) {
    if (position < 0 || position > this.size) {
      console.log("Invalid position!");
      return;
    }

    if (position === 0) {
      this.insertAtStart(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    let count = 0;

    while (count < position - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  /**
   * Insert at the middle — O(n) Time
   */
  insertAtMiddle(value) {
    const midPosition = Math.floor(this.size / 2);
    this.insertAtPosition(value, midPosition);
  }

  /**
   * Print the linked list
   */
  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" → ") + " → null");
  }
}

// Example usage
const list = new LinkedList();

// Insert at end
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
console.log("After inserting 10, 20, 30 at end:");
list.print(); // 10 → 20 → 30 → null

// Insert at start
list.insertAtStart(5);
console.log("\nAfter inserting 5 at start:");
list.print(); // 5 → 10 → 20 → 30 → null

// Insert at position 2
list.insertAtPosition(15, 2);
console.log("\nAfter inserting 15 at position 2:");
list.print(); // 5 → 10 → 15 → 20 → 30 → null

// Insert at middle
list.insertAtMiddle(99);
console.log("\nAfter inserting 99 at middle:");
list.print(); // 5 → 10 → 15 → 99 → 20 → 30 → null

console.log("Size:", list.size);
