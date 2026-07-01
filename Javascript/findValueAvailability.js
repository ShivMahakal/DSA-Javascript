function availability(arr1,arr2) {
    //  arr1.filter(item => {
    //   let count = arr2.filter(value => value === item).length;
    //     console.log(`${item}:${count}`);
    // });

    let arr3 = arr1?.map((item) => {
      const total = arr2.reduce(function(count,value) { 
          // console.log(item,value,"Hey")
            if(item === value ) count++
              return count
        },0)

        return `${item}:${total}`
    })

    console.log(arr3)
    
}

let arr1 =[1,2,3,4,5,2,9]
let arr2 = [2,3,0,4,2,1,7,8]

availability(arr1,arr2)


// using typescript
// function findAvailability(arr1: number[], arr2: number[]): string[] {
//   let avail: string[] = []; 
//     let arr4 = arr1.filter((item) => {
//       let count = arr2.filter((value) => value == item).length
//       // console.log(`${item}:${count}`);
//       avail.push(`${item}:${count}`)
    
//     })

// // console.log(avail)
//   return avail
  
// }


// let arr1 =[1,2,3,4,5,2,9]
// let arr2 = [2,3,0,4,2,1,7,8]
// let arr3 = findAvailability(arr1,arr2)

// console.log(arr3)
