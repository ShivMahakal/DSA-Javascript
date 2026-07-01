/**
 * Topic: Sum of All Prime Numbers up to N
 * Find the sum of all prime numbers from 2 to N.
 */

/**
 * Helper: Check if a number is prime — O(√n)
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Approach 1: Check each number — O(n√n) Time
 */
function sumOfAllPrimes(n) {
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

/**
 * Approach 2: Sieve of Eratosthenes — O(n log log n) Time, O(n) Space
 * More efficient for large N
 */
function sumOfPrimesSieve(n) {
  if (n < 2) return 0;

  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }

  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) sum += i;
  }

  return sum;
}

// Example usage
console.log("Sum of primes up to 10:", sumOfAllPrimes(10));     // 2+3+5+7 = 17
console.log("Sum of primes up to 20:", sumOfAllPrimes(20));     // 77
console.log("Sum of primes up to 100:", sumOfPrimesSieve(100)); // 1060

console.log("\nPrimes up to 20:");
const primes = [];
for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) primes.push(i);
}
console.log(primes.join(", ")); // 2, 3, 5, 7, 11, 13, 17, 19
