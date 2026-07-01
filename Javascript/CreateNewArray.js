function newArray(arr1,arr2) {


    let thirArray = arr1.map((item,i) => item + arr2[i])

    console.log(thirArray)
    
    
}
let arr1 = [1,2,3,4,5];
let arr2 = [2,4,5,6,7];

newArray(arr1,arr2)

// using typescript
// function CreateNewArray(arr1: number[], arr2: number[]): number[] {
  
//     let arr3:number [] = arr1.map((item,i) => item + arr2[i])

//     return arr3  
  
  
// }
// let arr1:number[] = [1,2,3,4,5];
// let arr2:number[]  = [2,4,5,6,7];
// let result: number[] = CreateNewArray(arr1, arr2);
// console.log(result)

