// Question: This task is to write a program to find the sum of all prime numbers up to a given integer N. A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself. The program should take an input value for N, calculate the sum of all prime numbers up to N, and output the result. The solution involves iterating through all integers up to N, checking if each integer is a prime number using a nested loop, and adding up the prime numbers.

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

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
console.log(`Sum of prime numbers up to ${N}:`, sumOfPrimes(N));
