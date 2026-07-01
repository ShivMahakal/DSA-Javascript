/**
 * Topic: FizzBuzz
 * Classic interview problem:
 * - Print "Fizz" for multiples of 3
 * - Print "Buzz" for multiples of 5
 * - Print "FizzBuzz" for multiples of both 3 and 5
 * - Otherwise print the number
 */

/**
 * Standard approach — O(n) Time, O(n) Space
 */
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

/**
 * String concatenation approach (more scalable for additional rules)
 */
function fizzBuzzScalable(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    result.push(output || i.toString());
  }

  return result;
}

// Example usage
console.log("FizzBuzz (1 to 20):");
console.log(fizzBuzz(20));
// ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz','16','17','Fizz','19','Buzz']

console.log("\nFizzBuzz Scalable (1 to 15):");
console.log(fizzBuzzScalable(15));
