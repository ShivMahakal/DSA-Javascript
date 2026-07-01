/**
 * Topic: Stack Implementation in JavaScript
 * Stack follows LIFO (Last In, First Out) principle.
 * Operations: push, pop, peek, isEmpty, size
 */

/**
 * Stack using Array
 */
class Stack {
  constructor() {
    this.items = [];
  }

  /** Add element to top — O(1) */
  push(element) {
    this.items.push(element);
    return this;
  }

  /** Remove and return top element — O(1) */
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  /** View top element without removing — O(1) */
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  /** Check if stack is empty — O(1) */
  isEmpty() {
    return this.items.length === 0;
  }

  /** Get size — O(1) */
  size() {
    return this.items.length;
  }

  /** Clear all elements */
  clear() {
    this.items = [];
  }

  /** Print stack contents */
  print() {
    console.log("[Top →]", [...this.items].reverse().join(" | "));
  }
}

/**
 * Stack using Linked List (constant O(1) for all operations)
 */
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this._size = 0;
  }

  push(value) {
    const node = new StackNode(value);
    node.next = this.top;
    this.top = node;
    this._size++;
    return this;
  }

  pop() {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    this._size--;
    return value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top === null;
  }

  size() {
    return this._size;
  }
}

// Example usage
console.log("=== Stack using Array ===");
const stack = new Stack();
stack.push(10).push(20).push(30);
stack.print(); // [Top →] 30 | 20 | 10

console.log("Peek:", stack.peek()); // 30
console.log("Pop:", stack.pop());   // 30
console.log("Pop:", stack.pop());   // 20
stack.print(); // [Top →] 10

console.log("Size:", stack.size()); // 1
console.log("Empty?", stack.isEmpty()); // false

stack.pop();
console.log("Empty after pop?", stack.isEmpty()); // true
console.log("Pop empty:", stack.pop()); // null

console.log("\n=== Stack using Linked List ===");
const llStack = new StackLinkedList();
llStack.push("a").push("b").push("c");
console.log("Peek:", llStack.peek()); // c
console.log("Pop:", llStack.pop());   // c
console.log("Size:", llStack.size()); // 2
