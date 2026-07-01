let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10];
let array3 = [11,12]

let merge_array = [...array1, ...array2, ...array3]

console.log(merge_array)


let mergeWithConcat = array1.concat(array2,array3)

console.log(mergeWithConcat)


const obj1 = {
  name:"Shivam",
  lastName:"Kumar",
 
  }


const obj2 = {

  userProfile:{
    name:"shivam",
    lastName:"kumar",
    code:"kumarshivam",
    address:{
      addressLine1:"vishal vihar",
      addressLine2 :"Mohali , Punjab"
    }
  }
}

const mergedObject = Object.assign({}, obj1, obj2);

console.log(mergedObject)