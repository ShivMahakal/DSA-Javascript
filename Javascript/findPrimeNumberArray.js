const number = [2,
    3,
    5,
    7,8,14,16,20]
    
    let isPrime = true;
    let primes = []
    
    number.forEach((item) => {
      
     if (item > 1) {
    
        for (let i = 2; i < item; i++) {
            if (item % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            primes.push(item)
        } 
    }})
    
    console.log(primes)

    const numbers = [2, 3, 5, 7, 8, 14, 16, 20];

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function groupPrimeNumber(arr) {
    let primeNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }

    return primeNumbers;
}

console.log(groupPrimeNumber(numbers));  // Output: [2, 3, 5, 7]
