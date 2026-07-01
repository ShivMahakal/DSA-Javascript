/**
 * Topic: JavaScript Closures
 * Closure is a feature where an inner function has access to the outer (enclosing) function's variables
 * even after the outer function has returned.
 */

function outer() {
  let name = "Shivam";

  function inner() {
    console.log("Accessing outer variable 'name' from inner scope:", name);
  }
  return inner;
}

let result = outer();
result(); // Shivam


// ==========================================
// SECTION 2: Data Privacy & Encapsulation
// ==========================================
// Closures can be used to emulate private variables.

function Counter() {
  let count = 0; // Private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const myCounter = Counter();
console.log("Increment:", myCounter.increment()); // 1
console.log("Increment:", myCounter.increment()); // 2
console.log("Count:", myCounter.getCount());      // 2
console.log("Decrement:", myCounter.decrement()); // 1

