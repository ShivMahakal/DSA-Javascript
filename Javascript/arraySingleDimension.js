let arr = [1,[2,3],[[4,5,6,7]],[[[[8,9,10,11]]]]]

let newArr = []
function recursive(arr){
    arr?.forEach(value => {
            if(Array.isArray(value)){
                recursive(value)
            }else {
                newArr?.push(value)
            }
    })
    return newArr
} 

let flatten = recursive(arr)

console.log(flatten)