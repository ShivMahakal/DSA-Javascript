/**
 * Topic: Implement Promise.all() from Scratch
 * Promise.all takes an array of promises and resolves when all resolve,
 * or rejects as soon as any one rejects.
 */

/**
 * Custom Promise.all implementation
 */
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    if (promises.length === 0) {
      return resolve([]);
    }

    const results = new Array(promises.length);
    let completedCount = 0;

    promises.forEach((promise, index) => {
      // Wrap in Promise.resolve to handle non-promise values
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value; // Maintain order
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error); // Reject immediately on first error
        });
    });
  });
}

/**
 * Bonus: Custom Promise.allSettled
 * Waits for ALL promises to settle (resolve or reject)
 */
function customPromiseAllSettled(promises) {
  return new Promise((resolve) => {
    if (promises.length === 0) return resolve([]);

    const results = new Array(promises.length);
    let settledCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// Example usage
console.log("=== Custom Promise.all (All resolve) ===");
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 100));
const p3 = Promise.resolve(3);

customPromiseAll([p1, p2, p3]).then((results) => {
  console.log("All resolved:", results); // [1, 2, 3]
});

console.log("\n=== Custom Promise.all (One rejects) ===");
const p4 = Promise.resolve("OK");
const p5 = Promise.reject("Error happened!");
const p6 = Promise.resolve("Also OK");

customPromiseAll([p4, p5, p6])
  .then((results) => console.log("Results:", results))
  .catch((error) => console.log("Rejected:", error)); // "Error happened!"

console.log("\n=== Custom Promise.allSettled ===");
setTimeout(() => {
  customPromiseAllSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed"),
    Promise.resolve("Another Success"),
  ]).then((results) => {
    console.log("All Settled:", results);
    // [{ status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Failed' }, ...]
  });
}, 200);
