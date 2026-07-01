/**
 * Topic: JavaScript Promises, Async/Await, and Event Loop
 */

// ==========================================
// 1. Event Loop: Microtasks vs Macrotasks
// ==========================================
// Microtasks (Promises) have higher priority than Macrotasks (setTimeout).
console.log("1. Script start");

setTimeout(() => {
  console.log("2. setTimeout (Macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Promise 1 (Microtask)");
  })
  .then(() => {
    console.log("4. Promise 2 (Microtask)");
  });

console.log("5. Script End");
// Expected Order: 1, 5, 3, 4, 2


// ==========================================
// 2. Callback Hell vs Promises
// ==========================================

// Callback Hell representation (commented)
/*
function getData(dataId, getNextFunction) {
  setTimeout(() => {
    console.log(`Data for id ${dataId}`);
    if (getNextFunction) getNextFunction();
  }, 1000);
}
getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});
*/

// Promise Chain representation
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data for id ${dataId}`);
    }, 1000);
  });
}

console.log("Starting Promise Chain:");
getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });


// ==========================================
// 3. Asynchronous Task with Async/Await
// ==========================================
console.log("Pizza order placed.");

const preparePizza = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza is ready 🍕");
    }, 2000);
  });
};

const handleOrder = async () => {
  const message = await preparePizza();
  console.log(message);
};

handleOrder();
console.log("Doing other tasks while waiting for pizza...");


// ==========================================
// 4. Promise Combinators: all, allSettled, race, any
// ==========================================

// Mock API functions for Todos and Posts
const fetchTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Learn Closures" }, { id: 2, title: "Learn Promises" }]);
    }, 1000);
  });
};

const fetchPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]);
    }, 1200);
  });
};

// A. Promise.all - Resolves when all resolve, rejects if any one rejects.
const getPromiseAllData = async () => {
  try {
    const [todos, posts] = await Promise.all([fetchTodos(), fetchPosts()]);
    console.log("Promise.all - Todos:", todos);
    console.log("Promise.all - Posts:", posts);
  } catch (error) {
    console.error("Promise.all error:", error);
  }
};
getPromiseAllData();

// B. Promise.allSettled - Resolves when all resolve or reject, returning status details.
const getPromiseAllSettledData = async () => {
  const p1 = fetchTodos();
  const p2 = Promise.reject("Failed to fetch comments"); // mocked error

  const results = await Promise.allSettled([p1, p2]);
  console.log("Promise.allSettled Results:");
  results.forEach((res, index) => {
    if (res.status === "fulfilled") {
      console.log(`  Task ${index + 1} Success ✅:`, res.value);
    } else {
      console.log(`  Task ${index + 1} Failed ❌:`, res.reason);
    }
  });
};
getPromiseAllSettledData();

// C. Promise.race - Resolves/rejects as soon as the first promise settles.
const slowResolve = new Promise((res) => setTimeout(() => res("Slow Success"), 2000));
const fastReject = new Promise((_, rej) => setTimeout(() => rej("Fast Error"), 500));

Promise.race([slowResolve, fastReject])
  .then((val) => console.log("Race Result:", val))
  .catch((err) => console.log("Race Result (Catch):", err)); // "Fast Error" will print first

// D. Promise.any - Resolves as soon as the first promise resolves. Ignores rejections unless all reject.
Promise.any([slowResolve, fastReject])
  .then((val) => console.log("Any Result:", val)) // "Slow Success" will print because Fast Error is ignored
  .catch((err) => console.log("Any Result error:", err));

