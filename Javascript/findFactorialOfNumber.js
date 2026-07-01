function factorial(number) {

    let fact = 1

    if(number < 0){
        
     console.log('Error! Factorial for negative number does not exist.');

    }
    else if(number == 0) {
        console.log(`The factorial of ${number} is 1.`);
    }
    else{
        
        for(let i=1; i <= number; i++){
        fact = fact * i
            console.log(fact, "Fact")
    }
        
        console.log(fact, "factorial")
    }
    
    
}

factorial(5)

// Another Method

function findFactorial(number) {
    let fact = 1
    
    // for(i=number; i > 0; i--){
    for(i=number; i>=1; i--){

        fact = fact * i
    }
    console.log(fact,"Factorial")
}



findFactorial(5)


// using typescript



// function findFactorial(num:number):number{
//     let fact:number = 1;
//     // return fact
//     for(let i:number = 1; i<=num; i++){
//       fact = fact * i;
     
//     }
//      return fact
//   }
  
//   let result: number = findFactorial(5);
//   console.log(result); // Output: 120
  