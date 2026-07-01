/**
 * Topic: Function Composition
 * compose(f, g, h)(x) = f(g(h(x))) — applies right to left
 * pipe(f, g, h)(x)    = h(g(f(x))) — applies left to right
 */

/**
 * compose — right to left execution
 * compose(f, g, h)(x) = f(g(h(x)))
 */
function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

/**
 * pipe — left to right execution
 * pipe(f, g, h)(x) = h(g(f(x)))
 */
function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

// Example transformations
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x * x;
const toString = (x) => `Result: ${x}`;

// === compose examples ===
console.log("=== COMPOSE (right to left) ===");
const composed = compose(toString, square, addTen, double);
console.log(composed(3));
// double(3)=6 → addTen(6)=16 → square(16)=256 → "Result: 256"

const composed2 = compose(addTen, double);
console.log(composed2(5)); // double(5)=10 → addTen(10)=20

// === pipe examples ===
console.log("\n=== PIPE (left to right) ===");
const piped = pipe(double, addTen, square, toString);
console.log(piped(3));
// double(3)=6 → addTen(6)=16 → square(16)=256 → "Result: 256"

const piped2 = pipe(double, addTen);
console.log(piped2(5)); // double(5)=10 → addTen(10)=20

// === String transformation example ===
console.log("\n=== String Pipeline ===");
const trim = (s) => s.trim();
const toLowerCase = (s) => s.toLowerCase();
const removeSpaces = (s) => s.replace(/\s+/g, "_");

const slugify = pipe(trim, toLowerCase, removeSpaces);
console.log(slugify("  Hello World  "));   // "hello_world"
console.log(slugify(" JavaScript Is FUN ")); // "javascript_is_fun"
