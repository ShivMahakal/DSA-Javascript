let n1 = 0, n2 = 1, n3 , limit=10
let arr = [n1,n2]

for(let i =2; i<limit; i++){
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    arr.push(n3);
}



console.log(arr.join(", "));


// using typescrip
// function FibonnaciSeries(limit:number):number[]{
//     let n1:number = 0
//     let n2:number = 1
//     let nextTerm:number
//     let series:number[] = [n1, n2]
    
//     for(let i:number = 2 ; i<= limit; i++){
     
//       nextTerm = n1 + n2
//       n1 = n2
//       n2 = nextTerm
//        series.push(nextTerm)
      
//     }
//     return series
//   }
  
//   let result = FibonnaciSeries(5)
  
//   console.log(result)


function Fibonnaci(limit){
    let n1 = 0, n2 = 1 , nextTerm , series = []

    for(i = 1; i <= limit; i++){
        series.push(n1)
        
        nextTerm = n1 + n2
        n1 = n2
        n2 = nextTerm

        console.log(series)
    }
}



Fibonnaci(5)