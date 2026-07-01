/* solution 1 */
function removeDuplicatesWithLoop(arr) {
  let seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (!seen[value]) {
      seen[value] = true;
      result.push(value);
    }
  }

  return result;
}

console.log(removeDuplicatesWithLoop(nums));

/* solution 2 */
function removeDuplicates(arr) {
  return arr?.filter((item, index) => arr.indexOf(item) === index);
}

const nums = [1, 2, 2, 3, 4, 1, 5, 3];
console.log(removeDuplicates(nums));

/* solution 3 */
function removeDuplicatesWithSet(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicatesWithSet(nums));

/* solution 4 */
function removeDuplicatesWithReduce(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
console.log(removeDuplicatesWithReduce(nums));

/* solution 5 */
function removeDuplicatesWithMap(arr) {
  const map = new Map();
  const result = [];

  return arr.filter((item) => !map.has(item) && map.set(item, true));
}

let mapResult = removeDuplicatesWithMap(nums);
console.log(mapResult, "Map Result");

// O(n) — Linear Time
// Jab aapka algorithm har element ko ek hi baar process karta hai, toh time complexity hoti hai O(n).

// O(n²) — Quadratic Time
// Jab aapka algorithm har element ke liye dusre elements ko bhi loop karta hai, toh time complexity hoti hai O(n²).

// Final Interview Answer (Hindi + English):

// “Is problem mein hume array se duplicates remove karne hain. Agar hum filter + indexOf ka use karte hain, toh woh har element ke liye poore array ko dobara scan karta hai — which results in O(n²) time complexity. Ye inefficient hota hai jab data bada ho.”

// “Isiliye maine object use kiya hai as a hash map — jisme har value ko ek baar check karte hain, aur agar wo pehle nahi aayi hoti, toh usse result mein daal dete hain. Ye approach sirf ek hi baar array ke elements ke through loop karta hai, aur lookup constant time mein hota hai — isliye ye O(n) time mein kaam karta hai.”

// “Ye solution simple bhi hai aur performance-friendly bhi, especially jab array bada ho.”
