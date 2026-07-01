function findSecondHighest(arr) {
    // If the array has less than 2 elements, return null
    if (arr.length < 2) return null;

    let highest = null;
    let secondHighest = null;

    for (let i = 0; i < arr.length; i++) {
        console.log( arr[i],"arr[i]")
        if (highest === null || arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
            console.log(highest,"highest")
            
        } 
    }

    return secondHighest;
}

// Example usage:
const arr = [3, 5, 7, 5, 3, 9, 1, 9, 7,51,52,54];
const secondHighest = findSecondHighest(arr);
console.log(secondHighest); // Output: 7



// Main code extra else if 
// function findSecondHighest(arr) {
//     // If the array has less than 2 elements, return null
//     if (arr.length < 2) return null;

//     let highest = null;
//     let secondHighest = null;

//     for (let i = 0; i < arr.length; i++) {
//         console.log( arr[i],"arr[i]")
//         if (highest === null || arr[i] > highest) {
//             secondHighest = highest;
//             console.log(secondHighest,"secondHighest")
//             highest = arr[i];
//             console.log(highest,"highest")
            
//         } else if ((secondHighest === null || arr[i] > secondHighest) && arr[i] !== highest) {
//             secondHighest = arr[i];
//         }
//     }

//     return secondHighest;
// }

// // Example usage:
// const arr = [3, 5, 7, 5, 3, 9, 1, 9, 7,11,12,14];
// const secondHighest = findSecondHighest(arr);
// console.log(secondHighest); // Output: 7


// using typescript

// function findSecondHighest(arr:number []): number  | null {
  
//     if(arr.length < 2) return null
    
//     let highest:number | null = null
//     let secondHighest:number | null = null
    
//     for(let i:number = 0; i < arr.length; i++ ){
//       if(highest === null|| arr[i] > highest){
//         secondHighest = highest
//         highest = arr[i]
//       }else if(arr[i] < highest && (secondHighest === null || arr[i] > secondHighest)){
//         secondHighest = arr[i]
//       }
     
//     }
//     return secondHighest
    
//   }
  
  
  
//   let arr: number[] = [5, 5, 5, 5, 5, 5, 3, 2];
  
//   let result:number | null  = findSecondHighest(arr)
  
//   console.log(result)