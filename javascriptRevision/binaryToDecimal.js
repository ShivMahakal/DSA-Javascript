function binaryToDecimal(binaryStr) {
  let decimal = 0;

  let binary = binaryStr.toString().split("").reverse();

  for (let i = 0; i < binary.length; i++) {
    let digit = parseInt(binary[i]);

    if (digit !== 0 && digit !== 1) {
      return `Invalid binary number`;
    }

    decimal += digit * Math.pow(2, i);
  }

  return decimal;
}

const binary = "1101"; // Binary for 13
console.log(`Decimal of ${binary} is:`, binaryToDecimal(binary));
