/**
 * Topic: Even/Odd Classification Based on ASCII Values
 * Classify each character in a string based on whether its ASCII value is even or odd.
 */

/**
 * Using charCodeAt — O(n) Time, O(n) Space
 */
function classifyByASCII(str) {
  const even = [];
  const odd = [];

  for (let i = 0; i < str.length; i++) {
    const ascii = str.charCodeAt(i);
    if (ascii % 2 === 0) {
      even.push({ char: str[i], ascii });
    } else {
      odd.push({ char: str[i], ascii });
    }
  }

  return { even, odd };
}

/**
 * Simple version: returns just character arrays
 */
function evenOddChars(str) {
  const even = [];
  const odd = [];

  for (let ch of str) {
    if (ch.charCodeAt(0) % 2 === 0) {
      even.push(ch);
    } else {
      odd.push(ch);
    }
  }

  return { evenASCII: even, oddASCII: odd };
}

// Example usage
const str = "Hello";
console.log("String:", str);
console.log("Classification:", classifyByASCII(str));
// H(72)=even, e(101)=odd, l(108)=even, l(108)=even, o(111)=odd

console.log("\nSimple:", evenOddChars("JavaScript"));

console.log("\nASCII values of 'ABCDE':");
for (let ch of "ABCDE") {
  console.log(`  ${ch} → ${ch.charCodeAt(0)} (${ch.charCodeAt(0) % 2 === 0 ? "Even" : "Odd"})`);
}
