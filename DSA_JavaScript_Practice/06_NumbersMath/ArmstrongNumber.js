/**
 * Topic: Armstrong Number Check
 * Problem: An Armstrong number is a number that is equal to the sum of cubes of its digits.
 * Example: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.
 */

// Time Complexity: O(log10(n)), Space Complexity: O(1)
function checkNumberIsArmstrong(number) {
  let temp = number;
  let sum = 0;

  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = Math.floor(temp / 10);
  }

  return sum === number;
}

const n = 153;
console.log(`Is ${n} an Armstrong number?`, checkNumberIsArmstrong(n)); // true
console.log(`Is 143 an Armstrong number?`, checkNumberIsArmstrong(143)); // false
