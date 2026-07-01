/**
 * Topic: JavaScript Debouncing
 * Debouncing limits the rate at which a function gets invoked.
 * It delays the execution of a function until after a certain period of inactivity.
 */

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    // DOM UI status support if run in browser
    if (typeof document !== "undefined") {
      const statusElement = document.getElementById("status");
      if (statusElement) {
        statusElement.innerText = "Status: Typing... (waiting for pause)";
      }
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (typeof document !== "undefined") {
        const statusElement = document.getElementById("status");
        if (statusElement) {
          statusElement.innerText = "Status: Searching executed!";
        }
      }
      fn(...args);
    }, delay);
  };
}

// Example usage / Node.js Mock Testing
const mockSearchApi = (query) => {
  console.log(`API Call Executed: Searching for "${query}"`);
};

const debouncedSearch = debounce(mockSearchApi, 500);

console.log("Simulating rapid keystrokes...");
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc"); // Only this final call should execute after 500ms

// Browser listener code (commented)
/*
const handleSearch = debounce((e) => {
  console.log("Searching For:", e.target.value);
}, 2000);
document.getElementById("search").addEventListener("input", handleSearch);
*/
