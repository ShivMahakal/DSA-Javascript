/**
 * Topic: Queue Implementation in JavaScript
 * Queue follows FIFO (First In, First Out) principle.
 * Operations: enqueue, dequeue, front, isEmpty, size
 */

/**
 * Queue using Array (simple but dequeue is O(n) due to shift)
 */
class QueueArray {
  constructor() {
    this.items = [];
  }

  /** Add to rear — O(1) */
  enqueue(element) {
    this.items.push(element);
    return this;
  }

  /** Remove from front — O(n) due to shift */
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  /** View front element — O(1) */
  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  /** View rear element — O(1) */
  rear() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
  print() { console.log("[Front →]", this.items.join(" | "), "[← Rear]"); }
}

/**
 * Queue using Linked List — all operations O(1)
 */
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // front
    this.tail = null; // rear
    this._size = 0;
  }

  enqueue(value) {
    const node = new QueueNode(value);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;
    return this;
  }

  dequeue() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this._size--;
    return value;
  }

  front() { return this.head ? this.head.value : null; }
  rear()  { return this.tail ? this.tail.value : null; }
  isEmpty() { return this._size === 0; }
  size()    { return this._size; }

  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log("[Front →]", values.join(" | "), "[← Rear]");
  }
}

/**
 * Circular Queue (fixed size ring buffer) — O(1) for all ops
 */
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.head = -1;
    this.tail = -1;
    this._size = 0;
  }

  enqueue(value) {
    if (this._size === this.capacity) {
      console.log("Queue is full!");
      return false;
    }
    this.tail = (this.tail + 1) % this.capacity;
    this.items[this.tail] = value;
    if (this.head === -1) this.head = this.tail;
    this._size++;
    return true;
  }

  dequeue() {
    if (this._size === 0) return null;
    const value = this.items[this.head];
    this.head = (this.head + 1) % this.capacity;
    this._size--;
    if (this._size === 0) { this.head = this.tail = -1; }
    return value;
  }

  isFull()  { return this._size === this.capacity; }
  isEmpty() { return this._size === 0; }
  size()    { return this._size; }
}

// Example usage
console.log("=== Queue (Array) ===");
const q = new QueueArray();
q.enqueue(10).enqueue(20).enqueue(30);
q.print(); // [Front →] 10 | 20 | 30 [← Rear]
console.log("Dequeue:", q.dequeue()); // 10
q.print(); // [Front →] 20 | 30 [← Rear]

console.log("\n=== Queue (Linked List) ===");
const llQueue = new Queue();
llQueue.enqueue("A").enqueue("B").enqueue("C");
llQueue.print();
console.log("Dequeue:", llQueue.dequeue()); // A
console.log("Front:", llQueue.front());     // B
console.log("Size:", llQueue.size());       // 2

console.log("\n=== Circular Queue ===");
const cq = new CircularQueue(3);
cq.enqueue(1); cq.enqueue(2); cq.enqueue(3);
cq.enqueue(4); // Queue is full!
console.log("Dequeue:", cq.dequeue()); // 1
cq.enqueue(4); // Now space available
console.log("Size:", cq.size()); // 3
