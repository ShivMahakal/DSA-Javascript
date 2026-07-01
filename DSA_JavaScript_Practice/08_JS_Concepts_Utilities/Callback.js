/**
 * Topic: JavaScript Callback Functions
 */

// ==========================================
// 1. Basic Callback Example
// ==========================================
function sum(a, b) {
  return a + b;
}

function calculate(a, b, callback) {
  return callback(a, b);
}

console.log("Calculate sum:", calculate(5, 10, sum)); // 15


// ==========================================
// 2. Asynchronous Callback Simulation
// ==========================================
function getUserData(userId, callback) {
  console.log("Fetching user from database...");
  setTimeout(() => {
    const data = { id: userId, name: "John Doe" };
    callback(data); // execute the callback with response data
  }, 1000);
}

function handleUserData(user) {
  console.log("Data received name:", user.name);
}

// Call async function with callback
getUserData(1, handleUserData);


// ==========================================
// 3. Callback Hell Example (Nested Callbacks)
// ==========================================
function getDataUserId(userId, getNextData) {
  console.log("Fetching Data from server for ID:", userId);

  setTimeout(() => {
    const data = { id: userId, name: "User" + userId };
    console.log("Fetched:", data);

    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

// Nested callback triggers "Pyramid of Doom" or Callback Hell
getDataUserId(1, () => {
  getDataUserId(2, () => {
    getDataUserId(3, () => {
      getDataUserId(4, () => {
        console.log("All nested data fetched!");
      });
    });
  });
});

