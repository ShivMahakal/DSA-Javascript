/**
 * Topic: Retry Failed Async Operations with Exponential Backoff
 * Automatically retry a failing async function with increasing wait times.
 * Very common in production APIs and interview questions.
 */

/**
 * Simple retry — retries n times with fixed delay
 */
function retry(fn, retries = 3, delay = 1000) {
  return new Promise(async (resolve, reject) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const result = await fn();
        resolve(result);
        return;
      } catch (error) {
        console.log(`Attempt ${attempt} failed: ${error.message}`);

        if (attempt === retries) {
          reject(new Error(`All ${retries} attempts failed. Last error: ${error.message}`));
          return;
        }

        // Wait before next attempt
        await new Promise((res) => setTimeout(res, delay));
      }
    }
  });
}

/**
 * Retry with Exponential Backoff
 * Each retry waits: delay * 2^(attempt-1)
 * e.g., 1s, 2s, 4s, 8s...
 */
function retryWithBackoff(fn, retries = 4, baseDelay = 500) {
  return new Promise(async (resolve, reject) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const result = await fn();
        resolve(result);
        return;
      } catch (error) {
        const waitTime = baseDelay * Math.pow(2, attempt - 1);
        console.log(
          `Attempt ${attempt} failed. Retrying in ${waitTime}ms... (${error.message})`
        );

        if (attempt === retries) {
          reject(new Error(`All ${retries} attempts failed.`));
          return;
        }

        await new Promise((res) => setTimeout(res, waitTime));
      }
    }
  });
}

// Mock API that fails N times before succeeding
function createUnreliableApi(failCount) {
  let callCount = 0;
  return function () {
    return new Promise((resolve, reject) => {
      callCount++;
      if (callCount <= failCount) {
        reject(new Error(`Server Error (call #${callCount})`));
      } else {
        resolve(`✅ Success on call #${callCount}`);
      }
    });
  };
}

// Example usage
console.log("=== Simple Retry (fails 2 times, succeeds on 3rd) ===");
const unreliableApi = createUnreliableApi(2);
retry(unreliableApi, 5, 100)
  .then((result) => console.log("Result:", result))
  .catch((err) => console.log("Error:", err.message));

console.log("\n=== Retry with Exponential Backoff (fails 3 times) ===");
const flakyApi = createUnreliableApi(3);
retryWithBackoff(flakyApi, 5, 50)
  .then((result) => console.log("Result:", result))
  .catch((err) => console.log("Final Error:", err.message));
