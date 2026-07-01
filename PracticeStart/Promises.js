// normal Promise
const myPromise = new Promise((resolve, reject) => {
  console.log("Fetching from database...");

  setTimeout(() => {
    const data = { name: "John Doe" };
    resolve("Data fetched Successfully:", data);
  }, 2000);
});

myPromise
  .then((res) => console.log(res, `Response`))
  .catch((err) => console.error(err, `Error`));
// ------------------------------End-----------------------------------------//

// ------------------------------------Start - 2-------------------------------------

//   function to fetch Todos
const fetchTodos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const data = await response.json();
    console.log(data, "Data Found Data");
    return data;
  } catch (error) {
    console.log("Data Found Here...");
  }
};

//   function to fetch Posts
const fetchPosts = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await response.json();
    console.log(data, "Data Found Data");
    return data;
  } catch (error) {
    console.log("Data Found Here...");
  }
};

const p1 = fetchTodos();
const p2 = fetchPosts();

const getData = async () => {
  const results = await Promise.allSettled([p1, p2]);
  console.log(results, "Results");
  results.forEach((res) => {
    if (res.status === "fulfilled") {
      console.log("Data:", res.value);
    } else {
      console.log("Error logic here:", res.reason);
    }
  });
};

getData();

const slowResolve = new Promise((res) => setTimeout(() => res("Slow"), 2000));
const fastReject = new Promise((_, rej) =>
  setTimeout(() => rej("Fast Error"), 500),
);

// Race: Fast Error jeet jayega
Promise.race([slowResolve, fastReject]).catch((err) =>
  console.log("Race Result:", err),
);

// Any: Fast Error ko ignore karega aur Slow Resolve ka wait karega
Promise.any([slowResolve, fastReject]).then((val) =>
  console.log("Any Result:", val),
);

// Promises All Settled Example
// 1. Fetch Todos (Iska URL galat rakha hai jaan-boojh kar test karne ke liye)
// const fetchTodos = async () => {
//   try {
//     // Galat URL: Isse error aayega
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos-galat-url`);

//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Todos Fetch Failed:", error.message);
//     throw error; // Yeh line 'rejected' status ke liye zaroori hai
//   }
// };

// // 2. Fetch Posts (Yeh sahi URL hai)
// const fetchPosts = async () => {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//     return await response.json();
//   } catch (error) {
//     console.error("Posts Fetch Failed:", error.message);
//     throw error;
//   }
// };

// // 3. Main Logic
// const getData = async () => {
//   console.log("Fetching data...");

//   // Promises ko variables mein store kiya
//   const p1 = fetchTodos();
//   const p2 = fetchPosts();

//   const results = await Promise.allSettled([p1, p2]);

//   console.log("--- Results Summary ---");

//   results.forEach((res, index) => {
//     if (res.status === "fulfilled") {
//       console.log(`API ${index + 1} Success ✅:`, res.value.length, "items found.");
//     } else {
//       console.log(`API ${index + 1} Failed ❌:`, res.reason.message);
//     }
//   });
// };

// // Run the function
// getData();

const getPromiseAllData = async () => {
  try {
    const [todos, posts] = await Promise.all([fetchTodos(), fetchPosts()]);
    console.log("Todos:", todos);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

console.log(getPromiseAllData(), "Promise All Data");
