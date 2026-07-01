function binaryToDecimal(binaryStr) {
  let decimal = 0;

  // convert to string and reverse it to start from the least significant bit
  const binary = binaryStr?.toString();
  console.log(binary, "binary");

  for (let i = 0; i < binary.length; i++) {
    // convert typeof string into the number
    const digit = parseInt(binary[i]);

    if (digit !== 0 && digit !== 1) {
      return `Invalid binary number`;
    }

    decimal = decimal * 2 + digit;

    console.log(decimal);
  }
  return decimal;
}

const binary = "1101";
console.log(`Decimal of ${binary} is:`, binaryToDecimal(binary));
