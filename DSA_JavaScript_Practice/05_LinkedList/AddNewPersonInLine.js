/**
 * Topic: Queue Simulation using Linked List
 * Problem: Simulate a line of people where a new person joins at the 2nd position in the queue.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueLine {
  constructor() {
    this.head = null;
  }

  // Populate queue with initial list of people
  addInitialPeople() {
    this.head = new Node("Aman");
    this.head.next = new Node("Rohit");
    this.head.next.next = new Node("Karan");
  }

  // Insert a person at the 2nd position (Index 1)
  insertAtSecond(newName) {
    const newNode = new Node(newName);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head.next; // New person points to the previous 2nd person
    this.head.next = newNode; // 1st person now points to new person
  }

  // Delete the second person in line
  deleteSecondPerson() {
    if (this.head === null || this.head.next === null) {
      console.log("No 2nd person to remove!");
      return;
    }
    this.head.next = this.head.next.next;
  }

  display() {
    let curr = this.head;
    let line = "";
    while (curr) {
      line += curr.data + " -> ";
      curr = curr.next;
    }
    console.log(line + "null");
  }
}

const line = new QueueLine();
line.addInitialPeople();
console.log("Initial Line of People:");
line.display(); // Aman -> Rohit -> Karan -> null

console.log("Deepak joins at 2nd position:");
line.insertAtSecond("Deepak");
line.display(); // Aman -> Deepak -> Rohit -> Karan -> null

console.log("Remove 2nd person (Deepak leaves):");
line.deleteSecondPerson();
line.display(); // Aman -> Rohit -> Karan -> null
