function checkNumberIsPrime(num) {
  let isPrime = true;

  if (num < 1) {
    return "Enter a positive number";
  } else if (num === 1) {
    return "1 is neither prime nor composite";
  } else {
    // Loop 2 se shuru hota hai aur num se ek pehle tak chalta hai
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false; // Agar kisi bhi number se divide ho gaya, toh prime nahi hai
        break; // Aage check karne ki zaroorat nahi hai
      }
    }

    return isPrime
      ? `${num} is a prime number`
      : `${num} is not a prime number`;
  }
}

console.log(checkNumberIsPrime(997));

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true; // 2 aur 3 prime hain

  // Hum sirf square root tak check karte hain
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(997));
