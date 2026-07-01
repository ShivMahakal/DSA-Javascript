// function findEvenOdd(num){

//     if(num % 2 == 0){
//         return (`${num} is Even`)
//     }else {
//         return (`${num} is Odd`)
//     }

// }

// let result = findEvenOdd(9)
// console.log(result)

// function findNumberIsArmstrong(num){
//     let temp = num;
//     let sum = 0

//     while(temp > 0){
//         let remainder = temp % 10;
//         sum = sum + remainder * remainder * remainder
//         temp = parseInt(temp/10)
//     }
//     if(sum == num){
//       return  `${num} is an Armstrong number`
//     }else{
//        return`${num} is not an Armstrong number`
//     }
// }

// let result = findNumberIsArmstrong(143)

// console.log(result)

// function printPrimeNumber(lowestNumber,highestNum){

//     let numbers = []

//     for(i=lowestNumber; i<=highestNum; i++){
//         let flag = 0;
//         for(j=2; j<=i; j++){
//             if(i%j==0){
//                 flag = 1;
//                 break
//             }
//         }
//         if(flag == 1 && i > 1){
//              numbers.push(i)
//         }
//     }
//     return numbers

// }

// let result = printPrimeNumber(3,99)
// console.log(result)

// function findFactorial(num){

//     let fact = 1

//     if(num < 0){
//         return "Error to find factorial"
//     }else if(num == 0){
//         return `Factorial of ${num} is 1`
//     }else {
//         for(i= 1 ; i<=num ; i++){
//             console.log(fact * i)
//             fact = fact * i;
//         }
//         return fact
//     }

// }

// let result = findFactorial(3)
// console.log(result);

// function Fibonnaci(limit) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm,
//     series = [];

//   for (i = 1; i <= limit; i++) {
//     series.push(n1);

//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;

//     console.log(series);
//   }
// }

// console.log(Fibonnaci(5));


// function CheckNumberIsArmStrong(number){
//   let sum = 0

//   let temp = number


//   while(temp > 0){

//     let remainder = temp%10

//     sum = sum + remainder * remainder * remainder

//     temp = parseInt(temp/10)

//   }

//   if(number === sum){
//     return `${number} is an Armstrong number`
//   }else {
//     return `${number} is not an Armstrong number`

//   }

    
// }


// let find = CheckNumberIsArmStrong(151)


// function Fibonnaci(limit){

//     let n1 = 0, n2 = 1 , n3 , series = [n1,n2]

//     for(let i = 2; i < limit; i++){

//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//         series?.push(n3)
//     }

//     return series

// }


// let fibo = Fibonnaci(10)

// function Factorial(number){

//     let fact = 1


//     if(number < 0){
//         return "Error to find factorial"
//     }else if(number == 0){
//         return `Factorial of ${number} is 1`
//     }else {

//         for(let i = number; i >=1; i--){
//             fact = fact * i
//         }

//         return fact

//     }


// }


// let factorial = Factorial(5)

// console.log(factorial,"factorial");

// function mergeArray(arr1,arr2){

//     let merge = arr1?.map((item,index)=> item + arr2[index])
//     return merge
// }




// let arr1 = [1,2,3,4,5];
// let arr2 = [2,4,5,6,7];

// let check = mergeArray(arr1,arr2)
// console.log(check,"check")


// function swapNumber(a,b){

//    return [a,b] = [b,a]



// }

// let swap = swapNumber(10,20)
// console.log(swap);

//  find one array values count in another array
// let arr1 = [2,3,4,5,6,7,8,1,2,4,6] 
// let arr2 = [2,3,4,5,6,7,8,10]

// function findRepetationCount(arr1,arr2){

//     let arr3 = arr2?.map((item) => {
//         let total = arr1?.reduce((count,curr) => {
            
//             if(item == curr) count++
//             return count
//         },0)

//         return `${item}:${total}`
//     })

//     return arr3


// }

// let find = findRepetationCount(arr1,arr2)
// console.log(find);


// convert multidimensional array into signle dimension

const multi = [1,[2,3],[[4,5,6]], [[[7,8,9,10]]]]

let newArr = []
function recursive(arr){

    arr.forEach((item) => {
        if(Array.isArray(item)){
            recursive(item)
        }else {
            newArr?.push(item)
        }
    })
return newArr
}

let find = recursive(multi)
console.log(find,"find")