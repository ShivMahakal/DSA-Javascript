/**
 * Approach: Floyd's Cycle-Finding (Tortoise and Hare)
 * Time: O(log n) | Space: O(1)
 */

const getNextNumber = (num) => {
  let totalSum = 0;
  while (num > 0) {
    const digit = num % 10;
    totalSum += digit * digit;
    num = Math.floor(num / 10);
  }
  return totalSum;
};

const isHappy = (n) => {
  // Shuruat mein slow 'n' par aur fast agle number par
  let slow = n;
  let fast = getNextNumber(n);

  // Jab tak fast 1 nahi banta aur dono takrate nahi
  while (fast !== 1 && slow !== fast) {
    slow = getNextNumber(slow); // Ek kadam (Tortoise)
    fast = getNextNumber(getNextNumber(fast)); // Do kadam (Hare)
  }

  // Agar fast 1 par ruk gaya, toh true.
  // Agar slow === fast ho kar loop ruka, toh false.
  return fast === 1;
};

// Function Call
console.log(isHappy(19)); // Output: true
console.log(isHappy(2)); // Output: false
