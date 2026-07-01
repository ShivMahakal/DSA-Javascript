const arrayWithDuplicates = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" }, 
  { id: 3, name: "Alice" }
];



let removeDuplicacy = arrayWithDuplicates?.filter((item,index) => {
  return arrayWithDuplicates?.findIndex(obj => obj?.id == item.id) === index
})

let uniqueIds = []
 const arrayWithoutDuplicates = arrayWithDuplicates?.filter((item,index) => {
   if(!uniqueIds?.includes(item?.id)){
     return uniqueIds.push(item?.id)
   }
 })
 
 
 
 let uniqId = []
 let uniObj = []
 
 const refine = arrayWithDuplicates?.forEach((item) => {
   if(!uniqId?.includes(item?.id)){
     uniqId.push(item?.id)
     uniObj.push(item)
   }
 })
 
 
 console.log(uniObj)

console.log(arrayWithoutDuplicates)

console.log(removeDuplicacy)

