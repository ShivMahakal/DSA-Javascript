function RemoveDuplicacy(num){
  
    let filterNumber = number?.filter((item,i) =>  number.indexOf(item) === i)
  
  console.log(filterNumber)
  
  
}

function RemoveDuplicacy2(num){
  let uniqueIds = []
  
  
  number?.forEach((item) => {
    if(!uniqueIds?.includes(item)){
      uniqueIds?.push(item)
    }
  })
  
  console.log(uniqueIds)
}

let number = [1,2,3,4,4,1,2,3,55,5,5]

RemoveDuplicacy2(number)


function RemoveDuplicacy3(num){
  

    let unique = num.reduce((acc,curr)=>{
        if(!acc.includes(curr))
            acc.push(curr)
            return acc
        
    },[])

    return unique
}


let reduceMethod = RemoveDuplicacy3(number)

function RemoveDuplicacy4(num){
    let uniqueIds = []

    for(let i=0; i<num.length;i++){
        if(!uniqueIds.includes(num[i])){
            uniqueIds.push(num[i])
        }
    }
    return uniqueIds

}


let forLoopMethod = RemoveDuplicacy4(number)
console.log(reduceMethod,"reduceMethod")
console.log(forLoopMethod,"forLoopMethod")




// program of Fibonacci series

function fibonacciSeries(number){
    let num1 = 0
    let num2 = 1
    let nextNum 
    let series = []

    for(let i = 1; i <= number; i++){
        series.push(num1)
        nextNum = num1 + num2
        num1 = num2
        num2 = nextNum

    }
return series

}

console.log(fibonacciSeries(10,"Fibonacci series"))


// program of factorial

function factorial(number){
    let fact = 1
    if(number < 0){
        return "Error! Factorial for negative number does not exist."

    } else if(number == 0){
        return `The factorial of ${number} is 1.`
    } else {
        for(let i = number; i>1; i--){
            fact = fact * i
        }
    }
    return fact
}

console.log(factorial(5),"Factorial of 5")

