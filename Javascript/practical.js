// words reverse function starts
function reverseString(str) {
  let reversed = "";

  for (let i = str?.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

function reverseEachWord(str) {
  let words = str?.split(" ");

  for (let i = 0; i < words?.length; i++) {
    words[i] = reverseString(words[i]);
  }

  let reversedSentence = words?.join(" ");

  return reversedSentence;
}

let revString = reverseEachWord("hello world");

// words reverse function ends

// capitalize string starts
function capitalizeString(str) {
  let newStr = " ";

  for (let i = 0; i < str?.length - 1; i++) {
    if (i === 0 || str[i] === " ") {
      newStr += str[i]?.toUpperCase();
    } else {
      newStr += str[i]?.toLowerCase();
    }
  }

  return newStr;
}

let capStr = capitalizeString("hello world");

// capitalize string ends

// function to find number is armStrong starts
function checkNumberIsArmStrong(number) {
  let temp = number;
  let sum = 0;

  while (temp > 0) {
    let remainder = temp % 10;

    sum = sum + remainder * remainder * remainder;

    temp = parseInt(temp / 10);
  }

  if (sum == number) {
    return `${number} is an Armstrong Number`;
  } else {
    return `${number} is not an Armstrong Number`;
  }
}

let num = checkNumberIsArmStrong(153);

console.log(num);

// function to find number is armStrong ends

// function to find the secondHighestValue starts
function findSecondHighest(arr) {
  if (arr.length < 2) return null;

  let highest = null;
  let secondHighest = null;

  for (let i = 0; i < arr.length; i++) {
    if (highest === null || arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (
      (secondHighest === null || arr[i] > secondHighest) &&
      arr[i] !== highest
    ) {
      secondHighest = arr[i];
    }
  }

  return secondHighest;
}

const arr = [3, 5, 7, 5, 3, 9, 1, 9, 7, 11, 10, 14, 13];
const secondHighest = findSecondHighest(arr);
console.log(secondHighest);

// function to find the secondHighestValue ends

// function to check the number is prime or not starts
function checkNumberIsPrime(number) {
  let isPrime = true;
  if (number == 1 || number < 1) {
    return `${number} is not a prime number nor a composite number`;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return `${number} is a prime number`;
    } else {
      return `${number} is not prime number`;
    }
  }
}

let primeCheck = checkNumberIsPrime(8);

console.log(primeCheck);

// function to check the number is prime or not ends

// function to print the prime number starts

function printPrimeNumber(lowestNum, highestNum) {
  let series = [];

  for (let i = lowestNum; i <= highestNum; i++) {
    let flag = 0;

    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (flag == 0 && i > 1) {
      series?.push(i);
    }
  }

  return series;
}

let primeList = printPrimeNumber(1, 10);
console.log(primeList);

// function to print the prime number ends

// function to print the fibonnaci series starts

function fibonnaci(limit) {
  let n1 = 0,
    n2 = 1,
    nextTerm,
    series = [];

  for (let i = 0; i <= limit; i++) {
    series?.push(n1);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return series;
}

let fibo = fibonnaci(5);
console.log(fibo);

// function to print the fibonnaci series ends

// function to find the factorial of number starts
function findFactorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }

  return fact;
}

let facto = findFactorial(5);
console.log(facto);

// function to find the factorial of number ends

// function to find the string is palindrom or not starts
function isPalindorme(str) {
  let revereStr = str?.split(" ").reverse().join("");

  console.log(revereStr);

  if (revereStr === str) {
    return `${str} is an palindrome string`;
  } else {
    return `${str} is not an palindrome string`;
  }
}

let palin = isPalindorme("test");
console.log(palin);

// function to find the string is palindrom or not ends

// function to remove duplicacy elements from an array starts

function removeDuplicacy(arr) {
  //   let removeDup = arr?.filter((item, index) => arr?.indexOf(item) == index);

  //   return removeDup;

  let uniqueIds = [];

  arr?.forEach((item) => {
    if (!uniqueIds?.includes(item)) {
      uniqueIds?.push(item);
    }
  });

  return uniqueIds;
}

let number = [1, 2, 3, 4, 4, 1, 2, 3];

let dup = removeDuplicacy(number);

console.log(dup, "dup");

// function to remove duplicacy elements from an array ends


// function to remove the duplicacy from an Object starts
function removeDupFromObject(obj){

//     let uniqId = []
//     let uniObj = []

//    obj?.forEach((item) => {

//     if(!uniqId?.includes(item?.id)){
//         uniqId?.push(item?.id)
//         uniObj?.push(item)
//     }

//    })

//     return uniObj


}

const arrayWithDuplicates = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 1, name: "John" }, 
    { id: 3, name: "Alice" }
  ];
  
let objFilter = removeDupFromObject(arrayWithDuplicates)

  console.log(objFilter,"objFilter");
  

// function to remove the duplicacy from an Object end



