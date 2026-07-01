/**
 * Topic: Binary to Decimal Conversion
 * Convert a binary string (e.g., "1010") to its decimal equivalent.
 */

/**
 * Approach 1: Manual calculation — O(n) Time, O(1) Space
 * Each binary digit has a positional value of 2^position
 */
function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;

  // Process from right to left
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
  }

  return decimal;
}

/**
 * Approach 2: Left-to-right processing — O(n) Time, O(1) Space
 */
function binaryToDecimalLeftToRight(binary) {
  let decimal = 0;

  for (let i = 0; i < binary.length; i++) {
    decimal = decimal * 2 + Number(binary[i]);
  }

  return decimal;
}

/**
 * Approach 3: Using parseInt (built-in)
 */
function binaryToDecimalBuiltIn(binary) {
  return parseInt(binary, 2);
}

/**
 * Bonus: Decimal to Binary
 */
function decimalToBinary(decimal) {
  if (decimal === 0) return "0";

  let binary = "";
  let num = decimal;

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}

// Example usage
console.log("Binary '1010' →", binaryToDecimal("1010"));                 // 10
console.log("Binary '1111' →", binaryToDecimalLeftToRight("1111"));      // 15
console.log("Binary '11001' →", binaryToDecimalBuiltIn("11001"));        // 25
console.log("Binary '10000000' →", binaryToDecimal("10000000"));         // 128

console.log("\nDecimal 10 →", decimalToBinary(10));   // "1010"
console.log("Decimal 25 →", decimalToBinary(25));     // "11001"
console.log("Decimal 128 →", decimalToBinary(128));   // "10000000"
