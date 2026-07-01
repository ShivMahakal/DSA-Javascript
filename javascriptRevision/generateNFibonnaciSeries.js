// Problem Statement: Given a number N, find the first N fibonnaci numbers. The first two numbers of the series are 1 and 1 constraints: 1<=N <=84

// 🧠 Problem Statement (Hinglish)

// Tumhe ek number N diya hai.

// 👉 Tumhe Fibonacci series ke pehle N numbers print karne hain.

// 📊 Fibonacci series kya hoti hai?

// Ye ek number sequence hota hai jisme:

// 👉 har number = pichle 2 numbers ka sum hota hai

// But is problem me starting fixed hai:

// 1st = 1
// 2nd = 1

// Uske baad:

// 3rd = 1 + 1 = 2
// 4th = 1 + 2 = 3
// 5th = 2 + 3 = 5
// 6th = 3 + 5 = 8
// 📌 Example
// Agar N = 5

// To output hoga:

// 1, 1, 2, 3, 5
// ⚠️ Constraints ka matlab
// 1 <= N <= 84

// 👉 Matlab:

// N minimum 1 ho sakta hai
// maximum 84 tak ja sakta hai

// (84 isliye diya hai because Fibonacci numbers ka size bada hota hai)

// 🎯 Tumhe kya karna hai?

// 👉 Ek function banana hai jo:

// input lega N
// aur return karega first N Fibonacci numbers ka array

function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];

  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// Example usage:
console.log(generateFibonacci(5)); // Output: [1, 1, 2, 3, 5]
console.log(generateFibonacci(0)); // Output: []
console.log(generateFibonacci(14)); // Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
