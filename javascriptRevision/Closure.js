function outer() {
  let name = "John Doe";
  return function inner() {
    console.log(name);
  };
}

const result = outer();

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
