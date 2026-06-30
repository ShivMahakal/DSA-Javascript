const printPrimeNumber = (lowestNum, highestNum) => {
  let numbers = [];
  for (let i = lowestNum; i <= highestNum; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && i > 1) {
      numbers?.push(i);
    }
  }
  return numbers;
};

const result = printPrimeNumber(3, 99);

console.log(result, "Result");
