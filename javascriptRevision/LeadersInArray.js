// 👉 Koi element leader tab hota hai
// agar uske right side me koi bada element na ho

function leaders(arr) {
  const n = arr.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let isLeader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        isLeader = false;
      }
    }

    if (isLeader) {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);
console.log(result);

function leadersWithOptimized(arr) {
  const result = [];
  let n = arr.length;

  let maxRight = [n - 1];
  result.push(maxRight);

  for (let i = n - 2; i >= 0; i++) {
    console.log("Hello");
  }
}

console.log(leadersWithOptimized(arr));
