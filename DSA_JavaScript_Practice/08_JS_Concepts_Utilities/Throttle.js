/**
 * Topic: JavaScript Throttling
 * Throttling limits the maximum number of times a function can be called over time.
 * It ensures the function executes at regular intervals regardless of click/input rates.
 */

function throttle(fn, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;
    isThrottled = true;

    // Browser button disability support
    if (typeof document !== "undefined") {
      const btn = document.getElementById("btn");
      if (btn) {
        btn.disabled = true;
        btn.innerText = "Processing...";
      }
    }

    setTimeout(() => {
      fn(...args);
      isThrottled = false;

      if (typeof document !== "undefined") {
        const btn = document.getElementById("btn");
        if (btn) {
          btn.disabled = false;
          btn.innerText = "User Button of Throttle";
        }
      }
    }, delay);
  };
}

// Example usage / Node.js Mock Testing
const mockClickAction = () => {
  console.log("Button Click Action Executed!");
};

const throttledClick = throttle(mockClickAction, 1000);

console.log("Simulating rapid clicks...");
throttledClick(); // Should execute
throttledClick(); // Ignored
throttledClick(); // Ignored

setTimeout(() => {
  throttledClick(); // Should execute after 1.1s delay
}, 1100);

// Browser listener code (commented)
/*
const newFunction = throttle(() => {
  console.log("Action Executed!");
}, 2000);
document.getElementById("btn").addEventListener("click", newFunction);
*/
