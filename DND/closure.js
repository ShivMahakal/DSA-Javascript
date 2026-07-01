function outer() {
  let name = "Shivam";

  function inner() {
    console.log(name);
  }
  return inner;
}

let result = outer();

result();

// encapsulate your data
function Counter() {
  let count = 1;

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
}

let myCounter = Counter();

console.log(myCounter.increment());
console.log(myCounter.increment());

// Evenet Loop
console.log("Script start");

setTimeout(() => {
  console.log("2. setTimeout (Macrotask)"); // Macrotask
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Promise 1 (Microtask)"); // Microtask
  })
  .then(() => {
    console.log("4. Promise 2 (Microtask)"); // Microtask
  });

console.log("5. Script End"); // Synchronous

// for Asynchronous task
console.log("1. Pizza order kar diya.");

// Ye function asynchronous hai (it takes time)
const preparePizza = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3.Pizza is ready");
    }, 3000);
  });
};
// Async function to handle the order
const handleOrder = async () => {
  const message = await preparePizza();
  console.log(message);
};

handleOrder();

console.log("3. Tab tak doston se baatein karte hain.");
