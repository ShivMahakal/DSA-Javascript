class Node {
  constructor(data) {
    this.data = data; // Value store karega (e.g., 100, 400)
    this.next = null; // Default agla node khali (null) rahega
  }
}

// 2. Linked List manage karne ka blueprint
class LinkedList {
  constructor() {
    this.head = null; // Linked List ka starting point (head) initially null hai
  }

  // Function: Naye number ko sabse aage (Head par) daalna
  insertFirst(data) {
    const newNode = new Node(data); // Naya node banate hain
    // Step B: Naye node ke 'next' ko purane head se jod do
    newNode.next = this.head;
    // Step C: Ab naye node ko naya 'head' bana do
    this.head = newNode;
  }
  printList() {
    let current = this.head; // Head se shuru karo
    let result = "";

    while (current !== null) {
      // Jab tak list khatam na ho
      result += current.data; // Data add karo
      if (current.next !== null) {
        result += " -> "; // Agar agla node hai toh arrow lagao
      }
      current = current.next; // Agle node par jao
    }

    result += " -> null"; // End mein null dikhao
    console.log(result);
  }
  insertLast(data) {
    const newNode = new Node(data);

    // Agar list khali hai (head null hai), toh naya node hi head banega
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Aakhiri node tak pahunchne ki tayari
    let current = this.head;

    // Jab tak current ka 'next' khali (null) nahi hota, aage badhte raho
    while (current.next !== null) {
      current = current.next;
    }

    // Loop khatam hone par 'current' aakhiri node par hoga.
    // Ab us aakhiri node se naye node ko jod do.
    current.next = newNode;
  }

  // index = kis jagah par daalna hai (e.g., 0, 1, 2...)
  insertAt(data, index) {
    // Agar index 0 hai, toh iska matlab sabse aage daalna hai (jo humne pehle seekha tha)
    if (index === 0) {
      // Naya node banao aur head update kar do
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    // Target position se ek kadam pehle (index - 1) tak safar karo
    while (current !== null && count < index - 1) {
      current = current.next;
      count++;
    }

    // Agar user ne aisa index de diya jo list ki length se bada hai
    if (current === null) {
      console.log("Ye position list ke bahar hai!");
      return;
    }

    // LINK JODNE KA MAGIC (Dhyan se dekhein)
    // Step 1: Naye node ke aage (next) woh daalo jo current ke aage tha
    newNode.next = current.next;

    // Step 2: Ab current ke aage (next) naya node laga do
    current.next = newNode;
  }
}

const myList = new LinkedList();
myList.insertFirst(300);
myList.insertFirst(200);
myList.insertFirst(100);
myList.printList();

// Ab list hai: 100 -> 200 -> 300 -> null

console.log("400 insert karne se pehle Head ka data:", myList.head.data); // Output: 100

// Naya node 400 insert karte hain
myList.insertFirst(400);

console.log("400 insert karne ke baad Head ka data:", myList.head.data); // Output: 400
console.log("Agle node ka data:", myList.head.next.data); // Output: 100
myList.printList();

myList.insertLast(500);
myList.printList();

myList.insertAt(400, 2);
myList.printList();
