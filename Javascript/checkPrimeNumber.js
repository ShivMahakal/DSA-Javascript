function checkNumber(number) {
    let isPrime = true

    if(number == 1){
        console.log("1 is neither a prime number nor a composite number")
    }

    else if(number > 1){
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                isPrime = false
            }
        }

        if(isPrime){
            console.log(`${number} is a prime number`)
        }else {
            console.log(`${number} is not a prime number`)
            
        }
                
    }

    else {
        console.log(`${number} is not a prime number`)
    }
    
}


checkNumber(2)

// using typescrupt
// function checkNumberIsPrime(num: number): string { 
//     let isPrime: boolean = true;
    
//     if (num == 1) {
//       return `${num} is neither a prime number nor a composite number`;
//     } else if(num > 2) {
//       for (let i: number = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
      
//       if (isPrime) {
//         return `${num} is a prime number`;
//       } else {
//         return `${num} is not a prime number`;
//       }
//     }
//   }
  
//   let find: string = checkNumberIsPrime(6);
//   console.log(find);
  