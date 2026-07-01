/**
 * Topic: Min Stack — Stack with O(1) getMin()
 * Design a stack that supports push, pop, top, and retrieving the minimum in O(1).
 */

/**
 * Approach 1: Two Stacks — main stack + auxiliary min-stack
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Tracks minimum at each level
  }

  /** Push value — O(1) */
  push(val) {
    this.stack.push(val);

    // Push to minStack if it's the new minimum (or minStack is empty)
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  /** Pop value — O(1) */
  pop() {
    if (this.stack.length === 0) return null;
    const val = this.stack.pop();

    // If popped value was the minimum, remove from minStack too
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return val;
  }

  /** Get top — O(1) */
  top() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
  }

  /** Get current minimum — O(1) */
  getMin() {
    return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : null;
  }

  isEmpty() { return this.stack.length === 0; }
  size()    { return this.stack.length; }
}

/**
 * Approach 2: Single Stack with encoded values (Math trick)
 * Saves space — no auxiliary stack needed
 */
class MinStackEncoded {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(0);
      this.min = val;
    } else {
      this.stack.push(val - this.min); // Store difference
      if (val < this.min) {
        this.min = val;
      }
    }
  }

  pop() {
    if (this.stack.length === 0) return null;
    const diff = this.stack.pop();

    if (diff < 0) {
      // This element was the minimum — restore previous min
      const prevMin = this.min;
      this.min = this.min - diff; // original min = current min - diff
      return prevMin;
    }

    return diff + this.min;
  }

  top() {
    if (this.stack.length === 0) return null;
    const diff = this.stack[this.stack.length - 1];
    return diff < 0 ? this.min : diff + this.min;
  }

  getMin() { return this.min; }
}

// Example usage
console.log("=== Min Stack (Two Stacks) ===");
const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(1);
minStack.push(4);

console.log("Stack top:", minStack.top());    // 4
console.log("Min:", minStack.getMin());       // 1

minStack.pop(); // Remove 4
console.log("After pop — Min:", minStack.getMin()); // 1

minStack.pop(); // Remove 1 (was minimum)
console.log("After pop — Min:", minStack.getMin()); // 3

minStack.pop(); // Remove 7
console.log("After pop — Min:", minStack.getMin()); // 3

console.log("\n=== Min Stack (Encoded Single Stack) ===");
const ms2 = new MinStackEncoded();
ms2.push(3);
ms2.push(1);
ms2.push(5);
console.log("Min:", ms2.getMin()); // 1
console.log("Top:", ms2.top());    // 5
ms2.pop();
console.log("After pop — Top:", ms2.top());    // 1
ms2.pop();
console.log("After pop — Min:", ms2.getMin()); // 3
