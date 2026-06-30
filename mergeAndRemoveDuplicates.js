// function mergeAndRemoveDuplicates(arr) {
//   const result = {};

//   for (let i = 0; i < arr.length; i++) {
//     const obj = arr[i];

//     for (const key in obj) {
//       if (!result[key]) {
//         result[key] = [];
//       }

//       const values = obj[key];

//       for (let j = 0; j < values.length; j++) {
//         const val = values[j];

//         if (result[key].indexOf(val) === -1) {
//           result[key].push(val);
//         }
//       }
//     }
//   }

//   return result;
// }

// const data = [
//   { a: [1, 2], b: [3] },
//   { a: [2, 4], c: [5] },
//   { b: [3, 6], c: [7] },
// ];

// console.log(mergeAndRemoveDuplicates(data));

const data = [
  { a: [1, 2], b: [3] },
  { a: [2, 4], c: [5] },
  { b: [3, 6], c: [7] },
];

let merged = data.reduce((obj, item) => {
  // Har object ki keys (a, b, c) par loop chalayenge
  Object.keys(item).forEach((key) => {
    if (obj[key]) {
      // Agar key pehle se hai, toh naye elements push kar do
      obj[key].push(...item[key]);
    } else {
      // Agar key nayi hai, toh naya array bana do (copy ke saath)
      obj[key] = [...item[key]];
    }
  });
  return obj;
}, {});

console.log(merged);

const originalArr = [
  { id: 1, elements: [1, 2] },
  { id: 2, elements: [3] },
  { id: 1, elements: [3, 4] },
  { id: 3, elements: [5] },
];

let reducedArr = originalArr.reduce((obj, item) => {
  obj[item.id]
    ? obj[item.id].elements.push(...item.elements)
    : (obj[item.id] = item);
  return obj;
}, {});

console.log(reducedArr);
