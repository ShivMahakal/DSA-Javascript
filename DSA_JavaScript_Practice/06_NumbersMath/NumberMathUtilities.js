/**
 * Topic: Mathematical and Numerical Utilities
 * Consolidates basic number conversion, mathematical property checking, and simulation problems.
 */

// ==========================================
// 1. Binary to Decimal Conversion
// ==========================================
function binaryToDecimal(binaryStr) {
  let decimal = 0;
  let binary = binaryStr.toString().split("").reverse();

  for (let i = 0; i < binary.length; i++) {
    let digit = parseInt(binary[i]);
    if (digit !== 0 && digit !== 1) {
      return `Invalid binary number`;
    }
    decimal += digit * Math.pow(2, i);
  }
  return decimal;
}
console.log("Binary '1101' to Decimal:", binaryToDecimal("1101")); // 13


// ===============================================
// 2. Reverse Digits (Positive & Negative numbers)
// ===============================================
function reverseDigits(num) {
  let revNum = 0;
  let sign = Math.sign(num); // 1 for positive, -1 for negative
  num = Math.abs(num);       // Operate on positive magnitude

  while (num > 0) {
    let remainder = num % 10;
    revNum = revNum * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return sign * revNum;
}
console.log("Reverse digits (34562):", reverseDigits(34562));   // 26543
console.log("Reverse digits (-34562):", reverseDigits(-34562)); // -26543


// ==========================================
// 3. FizzBuzz Simulation
// ==========================================
function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i.toString());
  }
  return result.join("\n");
}
console.log("FizzBuzz (5 terms):\n" + fizzBuzz(5)); // 1 \n 2 \n Fizz \n 4 \n Buzz


// ==========================================
// 4. Happy Number Check (Floyd's Cycle Find)
// ==========================================
function getNextHappyNumber(num) {
  let totalSum = 0;
  while (num > 0) {
    const digit = num % 10;
    totalSum += digit * digit;
    num = Math.floor(num / 10);
  }
  return totalSum;
}

function isHappy(n) {
  let slow = n;
  let fast = getNextHappyNumber(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNextHappyNumber(slow);
    fast = getNextHappyNumber(getNextHappyNumber(fast));
  }

  return fast === 1;
}
console.log("Is 19 a Happy Number?", isHappy(19)); // true
console.log("Is 2 a Happy Number?", isHappy(2));   // false


// ==========================================
// 5. Value Swapping
// ==========================================

// Approach A: Using Temporary Variable
function swapWithTemp(x, y) {
  let temp = x;
  x = y;
  y = temp;
  return [x, y];
}

// Approach B: Using Array Destructuring (ES6)
function swapWithDestructuring(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

console.log("Swap (temp) [10, 20]:", swapWithTemp(10, 20)); // [20, 10]
console.log("Swap (destructure) ['Hello', 'World']:", swapWithDestructuring("Hello", "World")); // ["World", "Hello"]

