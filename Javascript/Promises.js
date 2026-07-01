// callback hell example
// function getData(dataId,getNextFunction){
//     setTimeout(()=>{
//         const data = `Data for id ${dataId}`;
//         console.log(data);
//         if(getNextFunction){
//             getNextFunction();
//         }
//     },2000)
// }

// getData(1,()=> {
//     getData(2,() => {
//         getData(3,() => {
//             getData(4)
//         })

//     })
// })

// promise example
// function getData(dataId){
//     return new Promise((reslove,reject) => {
//         setTimeout(() => {
//             const data = `Data for id ${dataId}`;
//             // reslove(data);

//             reject("Error")
//         },2000)
//     })
// }

// getData(1).then((res) => {
//     console.log(res,"Result1");
//     return getData(2).then((res) => {
//         console.log(res,"Result2")
//         return getData(3).then((res)=>{
//             console.log(res,"Result3")
//             return getData(4).then((res)=>{
//                 console.log(res,"Result4")
//             })
//         })
//     });
// }).catch((err) => {
//     console.log(err,"Error");
// });

// function sum(a,b){
//     return a + b;
// }
// function calculate(a,b,sum){

//    return sum(a,b);
// }

// let find = calculate(5,10,sum);

// console.log(find,"Result");

function getParisSumOfTwoNumber(array) {
    const pairs = [];
    const seen = new Set();
//   for (number of array) {
//     for (let j = 1; j < array.length; j++) {
//       console.log(number, array[j], "Sum");
//       if (number + array[j] === 0) {
//         return [number, array[j]];
//       }
//     }
//   }
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        // Sort the pair to avoid reversing the pair later
        let pair = [array[i], array[j]].sort((a, b) => a - b); 
        console.log(pair,"pair")
        // Join to convert to string for easy comparison
        let pairString = pair.join(',');

        if (array[i] + array[j] === 0 && !seen.has(pairString)) {
            pairs.push(pair);  // Add the pair
            seen.add(pairString);  // Mark this pair as seen
        }
    }
}
return pairs;
}

const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8, -2, 2];

let checkPair = getParisSumOfTwoNumber(array);

console.log(checkPair, "checkPair");
