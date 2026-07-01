function outer() {
  let name = "John Doe";

  return function inner() {
    console.log(name);
  };
}

let result = outer();

result();

// data privacy and encapsulate

function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
  };
}

const myCounter = createCounter();

console.log(myCounter.increment());
console.log(myCounter.decrement());
