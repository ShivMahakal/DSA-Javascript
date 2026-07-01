
function printPrimeNumber(lowestNum,highestNum) {
    let numbers = []
    for(i = lowestNum; i <= highestNum; i++){
        let flag = 0
        for (j = 2 ; j < i; j++){

            if(i%j == 0){
                flag = 1
                break
            }
        }

        if(flag == 0 && i > 1){
            numbers.push(i)
        }

    }

    return numbers


}

const result = printPrimeNumber(3,99)

console.log(result,"Result")

// using typescript
// function printPrimeNumbers(lowestNum: number, highestNum: number): number[] {
//     let primeNumber: number[] = [];
  
//     for (let i: number = lowestNum; i <= highestNum; i++) {
//       let flag: number = 0;
  
//       for (let j: number = 2; j < i; j++) {
//         if (i % j == 0) {
//           flag = 1;
//           break;
//         }
//       }
  
//       if (flag == 0 && i > 1) {
//         primeNumber.push(i);
//       }
//     }
  
//     return primeNumber;
//   }
  
//   let result: number[] = printPrimeNumbers(3, 99);
//   console.log(result);
  