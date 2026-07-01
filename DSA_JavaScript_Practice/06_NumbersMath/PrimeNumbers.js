/**
 * Topic: Prime Number Algorithms
 * Includes primality checks, range printing, array filtering, and summing primes.
 */

// ==========================================
// PROBLEM 1: Primality Check
// ==========================================
// Checks if a number is prime. O(sqrt(n)) Time.
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Is 7 Prime?", isPrime(7)); // true
console.log("Is 8 Prime?", isPrime(8)); // false


// ==========================================
// PROBLEM 2: Print Prime Numbers in Range
// ==========================================
function printPrimeNumbers(lowestNum, highestNum) {
  let series = [];
  for (let i = lowestNum; i <= highestNum; i++) {
    if (isPrime(i)) {
      series.push(i);
    }
  }
  return series;
}
console.log("Primes from 1 to 20:", printPrimeNumbers(1, 20)); // [2, 3, 5, 7, 11, 13, 17, 19]


// ==========================================
// PROBLEM 3: Filter Prime Numbers from Array
// ==========================================
function groupPrimeNumbers(arr) {
  return arr.filter((num) => isPrime(num));
}
const numbers = [2, 3, 5, 7, 8, 14, 16, 20];
console.log("Primes in array:", groupPrimeNumbers(numbers)); // [2, 3, 5, 7]


// ==========================================
// PROBLEM 4: Sum of All Prime Numbers up to N
// ==========================================
function sumOfPrimes(N) {
  let sum = 0;
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
const N = 20;
console.log(`Sum of primes up to ${N}:`, sumOfPrimes(N)); // 77 (2+3+5+7+11+13+17+19)
