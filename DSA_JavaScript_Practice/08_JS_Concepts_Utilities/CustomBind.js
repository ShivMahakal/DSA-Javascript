/**
 * Topic: Implement Function.prototype.bind() from Scratch
 * bind() creates a new function with a specific `this` context and optional preset arguments.
 */

/**
 * Custom bind implementation
 */
Function.prototype.customBind = function (context, ...args) {
  const fn = this; // The original function

  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
};

/**
 * Standalone version (without modifying prototype)
 */
function customBind(fn, context, ...args) {
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
}

// Example usage
const person = {
  name: "Shivam",
  greet: function (greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
  },
};

const anotherPerson = { name: "Rahul" };

// Using native bind
const nativeBound = person.greet.bind(anotherPerson, "Hello");
console.log("Native bind:", nativeBound("!"));
// "Hello, I'm Rahul!"

// Using custom bind
const customBound = person.greet.customBind(anotherPerson, "Hey");
console.log("Custom bind:", customBound("?"));
// "Hey, I'm Rahul?"

// Standalone version
const standaloneBound = customBind(person.greet, anotherPerson, "Hi");
console.log("Standalone:", standaloneBound("."));
// "Hi, I'm Rahul."

// Partial application with bind
function multiply(a, b, c) {
  return a * b * c;
}

const double = multiply.customBind(null, 2);
console.log("\nPartial application:");
console.log("double(3, 4):", double(3, 4)); // 2 * 3 * 4 = 24

const tripleAndDouble = multiply.customBind(null, 3, 2);
console.log("tripleAndDouble(5):", tripleAndDouble(5)); // 3 * 2 * 5 = 30
