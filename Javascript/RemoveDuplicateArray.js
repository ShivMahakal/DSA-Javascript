function RemoveDuplicacy(number) {
  // let filterNumber = number?.filter((item,i) =>  number.indexOf(item) === i)

  // let uniqueId = []

  // number.forEach((item) => {
  //     if(!uniqueId?.includes(item)){
  //         uniqueId.push(item)
  //     }
  // })

  let unique = number.reduce(function (acc, curr) {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  console.log(unique);
}

let number = [1, 2, 3, 4, 4, 1, 2, 3];
RemoveDuplicacy(number);

// function RemoveDuplicacy(arr){

//     return arr.filter((item,index) => arr.indexOf(item) === index)

//     let uniqueValues = []
//     for(let value of arr){
//     if( !uniqueValues.includes(value)){
//       uniqueValues.push(value)
//     }
//     }

//     return uniqueValues

//   }

//   let number = [1,2,3,4,4,1,2,3]
//   const result = RemoveDuplicacy(number)

//   console.log(result)

const roadmaps = ["JavaScript", "React", "Node.js", "Node.js", "JavaScript"];

const uniqueRoadmapSet = [...new Set(roadmaps)];
console.log(uniqueRoadmapSet);

const filterRoadmap = roadmaps?.filter(
  (roadmap, index) => roadmaps.indexOf(roadmap) === index,
);

console.log(filterRoadmap);

const reduceRoadmap = roadmaps?.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc?.push(curr);
    return acc;
  }
});

const uniqRoads = roadmaps?.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

const uniqueRoadmaps = [];

roadmaps?.forEach((item) => {
  if (!uniqueRoadmaps?.includes(item)) {
    uniqueRoadmaps?.push(item);
  }
});

console.log(uniqueRoadmaps);

for (const roadmap of roadmaps) {
  if (!uniqueRoadmaps?.includes(roadmap)) {
    uniqueRoadmaps?.push(roadmap);
  }
}

console.log(uniqueRoadmaps);

function removeDuplicacyForLoop(num) {
  let seen = {};
  let result = [];

  for (let i = 0; i < num.length; i++) {
    if (!seen[num[i]]) {
      seen[num[i]] = true;
      result.push(num[i]);
    }
  }

  return result;
}
