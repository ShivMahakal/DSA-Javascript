class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Shuruat mein kuch log khade kar dete hain
  addInitialPeople() {
    this.head = new Node("Aman"); // 1st person
    this.head.next = new Node("Rohit"); // 2nd person
    this.head.next.next = new Node("Karan"); // 3rd person
  }

  // --- YE HAI ASLI LOGIC: 2nd position par insert karna ---
  insertAtSecond(newName) {
    const newNode = new Node(newName); // 1. Deepak ko banaya

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // 2. Deepak ko bolo Rohit ka address pakde
    // (Aman.next filhal Rohit hai, toh Deepak.next bhi Rohit ho jayega)
    newNode.next = this.head.next;

    // 3. Aman ko bolo ab uska 'next' Deepak hai
    this.head.next = newNode;
  }

  //   deleteSecondPerson() {
  //     if (this.head === null || this.head.next === null) {
  //       console.log("Line mein itne log hi nahi hain ki 2nd wala delete ho!");
  //       return;
  //     }

  //     // Aman (head) ko bolo ki ab uska 'next' Deepak nahi,
  //     // balki Deepak ka bhi agla (Rohit) hai.

  //     // this.head.next (Deepak)
  //     // this.head.next.next (Rohit)

  //     this.head.next = this.head.next.next;

  //     // Deepak ka koi reference nahi bacha,
  //     // JS use memory se uda dega (Garbage Collection).
  //   }

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

// Chalo run karte hain
const line = new LinkedList();
line.addInitialPeople();
console.log("Purani Line:");
line.display(); // Aman -> Rohit -> Karan -> null

console.log("\nDeepak ko 2nd number pe ghusane ke baad:");
line.insertAtSecond("Deepak");
// line.deleteSecondPerson();
line.display(); // Aman -> Deepak -> Rohit -> Karan -> null
