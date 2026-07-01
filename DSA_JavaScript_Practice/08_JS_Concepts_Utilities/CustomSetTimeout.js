/**
 * Topic: Custom setTimeout (using setInterval as building block)
 * Implement a custom setTimeout-like utility and also
 * demonstrate print 1 to 5 every second (classic interview question).
 */

/**
 * Custom setTimeout using setInterval
 */
function customSetTimeout(fn, delay, ...args) {
  const start = Date.now();

  const interval = setInterval(() => {
    if (Date.now() - start >= delay) {
      clearInterval(interval);
      fn(...args);
    }
  }, 10); // check every 10ms

  // Return a cancel function
  return {
    cancel: () => clearInterval(interval),
  };
}

/**
 * Classic: Print 1 to N every second using setTimeout (closure approach)
 */
function printOneToN(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(`[${i}] - printed at ${i}s`);
    }, i * 1000);
  }
}

/**
 * Same using var — WRONG way (classic interview trap)
 * All print n+1 due to closure over same `i`
 */
function printWithVar(n) {
  for (var i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(`var: ${i}`); // All print 6 for n=5
    }, i * 1000);
  }
}

/**
 * Fix for var — using IIFE
 */
function printWithVarFixed(n) {
  for (var i = 1; i <= n; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(`var+IIFE: ${j}`); // Correct: 1, 2, 3, 4, 5
      }, j * 1000);
    })(i);
  }
}

/**
 * Print 1 to N with delay using recursion + setTimeout
 */
function printRecursive(current, n) {
  if (current > n) return;
  setTimeout(() => {
    console.log(`Recursive: ${current}`);
    printRecursive(current + 1, n);
  }, 1000);
}

// Example usage
console.log("=== Custom setTimeout ===");
customSetTimeout(() => {
  console.log("Custom setTimeout fired after ~200ms!");
}, 200);

console.log("\n=== Print 1 to 5 every second (let — correct) ===");
printOneToN(5);

// Uncomment to test var issue:
// console.log("\n=== Print with var (WRONG) ===");
// printWithVar(5);

// console.log("\n=== Print with var+IIFE (CORRECT) ===");
// printWithVarFixed(5);

// console.log("\n=== Recursive approach ===");
// printRecursive(1, 5);
