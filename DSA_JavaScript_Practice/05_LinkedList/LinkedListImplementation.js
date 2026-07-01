/**
 * Topic: Custom Singly Linked List Implementation
 */

class Node {
  constructor(data) {
    this.data = data; // Node value
    this.next = null; // Next node reference
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Head of the list
  }

  // Insert node at the beginning (Head)
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert node at the end (Tail)
  insertLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert node at a specific index (0-based)
  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    while (current !== null && count < index - 1) {
      current = current.next;
      count++;
    }

    if (current === null) {
      console.log("Position is out of bounds!");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Specific implementation: Insert at 2nd position (Index 1)
  insertAtSecond(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head.next;
    this.head.next = newNode;
  }

  // Delete the second person in line (Index 1)
  deleteSecondPerson() {
    if (this.head === null || this.head.next === null) {
      console.log("List has less than 2 elements to delete the second node!");
      return;
    }
    this.head.next = this.head.next.next;
  }

  // Prints the Linked List sequence
  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data;
      if (current.next !== null) {
        result += " -> ";
      }
      current = current.next;
    }
    result += " -> null";
    console.log(result);
  }
}

// Example usage
const myList = new LinkedList();
myList.insertFirst(300);
myList.insertFirst(200);
myList.insertFirst(100);
console.log("Initial List:");
myList.printList(); // 100 -> 200 -> 300 -> null

myList.insertLast(500);
console.log("After inserting 500 at tail:");
myList.printList(); // 100 -> 200 -> 300 -> 500 -> null

myList.insertAt(400, 2);
console.log("After inserting 400 at index 2:");
myList.printList(); // 100 -> 200 -> 400 -> 300 -> 500 -> null

myList.insertAtSecond("Deepak");
console.log("After inserting 'Deepak' at second position:");
myList.printList(); // 100 -> Deepak -> 200 -> 400 -> 300 -> 500 -> null

myList.deleteSecondPerson();
console.log("After deleting second position node:");
myList.printList(); // 100 -> 200 -> 400 -> 300 -> 500 -> null
