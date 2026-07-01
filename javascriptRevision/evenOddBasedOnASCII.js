function evenOdd(S) {
  let x = 0; // even ASCII at even index
  let y = 0; // odd ASCII at odd index

  for (let i = 0; i < S.length; i++) {
    const ascii = S.charCodeAt(i);

    if (i % 2 === 0 && ascii % 2 === 0) {
      x++;
    } else if (i % 2 === 1 && ascii % 2 === 1) {
      y++;
    }
  }

  return (x + y) % 2 === 0 ? "EVEN" : "ODD";
}

console.log(evenOdd("abbbcc")); // Output: EVEN
console.log(evenOdd("nobitaa")); // Output: ODD
console.log(evenOdd("abcdefghijklmnopqrstuvwxyz")); // Output: EVEN
console.log(evenOdd("ababbccddeeeaadjadwdadawdawdawdawhhdjka")); // Output: ODD

// Explanation
// ASCII of 'a' = 97 (odd)
// ASCII of 'b' = 98 (even)
// Indexing is 0-based:
// index 0, 2, 4... → even index
// index 1, 3, 5... → odd index

// So:

// Add to X if index is even and ASCII is even.
// Add to Y if index is odd and ASCII is odd.
