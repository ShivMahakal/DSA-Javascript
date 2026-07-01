/**
 * Topic: Reverse Digits of a Number
 * Reverse the digits of an integer. Handle negative numbers too.
 * 123 → 321  |  -456 → -654  |  120 → 21
 */

/**
 * Mathematical approach — O(log n) Time, O(1) Space
 */
function reverseDigits(num) {
  const isNegative = num < 0;
  let n = Math.abs(num);
  let reversed = 0;

  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }

  return isNegative ? -reversed : reversed;
}

/**
 * String approach — O(n) Time
 */
function reverseDigitsString(num) {
  const isNegative = num < 0;
  const str = Math.abs(num).toString();
  const reversed = parseInt(str.split("").reverse().join(""), 10);
  return isNegative ? -reversed : reversed;
}

/**
 * With 32-bit integer overflow check (LeetCode style)
 */
function reverseDigitsSafe(num) {
  const INT_MAX = Math.pow(2, 31) - 1;  // 2147483647
  const INT_MIN = -Math.pow(2, 31);     // -2147483648

  let result = 0;
  let n = num;

  while (n !== 0) {
    const digit = n % 10;
    n = Math.trunc(n / 10); // trunc handles negatives correctly

    if (result > INT_MAX / 10 || result < INT_MIN / 10) {
      return 0; // Would overflow
    }

    result = result * 10 + digit;
  }

  return result;
}

// Example usage
console.log("Reverse 123:", reverseDigits(123));       // 321
console.log("Reverse -456:", reverseDigits(-456));     // -654
console.log("Reverse 120:", reverseDigits(120));       // 21
console.log("Reverse 0:", reverseDigits(0));           // 0

console.log("\nString approach:");
console.log("Reverse 9876:", reverseDigitsString(9876)); // 6789

console.log("\nSafe (overflow check):");
console.log("Reverse 1234:", reverseDigitsSafe(1234));       // 4321
