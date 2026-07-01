// Time Complexity: O(n) - array ko ek baar traverse karna hai
// Space Complexity: O(n) - non-zero elements ke liye extra array
function moveZerosToMiddle(arr) {
  let zeros = 0;
  let nonZero = [];

  // Step 1: separate
  for (let num of arr) {
    if (num === 0) {
      zeros++;
    } else {
      nonZero.push(num);
    }
  }

  console.log("Non-zero:", nonZero);
  console.log("Zero count:", zeros);

  // Step 2: split
  let mid = Math.floor(nonZero.length / 2);

  let left = nonZero.slice(0, mid);
  let right = nonZero.slice(mid);

  // Step 3: build result
  let result = [...left, ...Array(zeros).fill(0), ...right];

  console.log("Final:", result);

  return result;
}

// Test
moveZerosToMiddle([1, 0, 2, 0, 3, 4]);

// Optimization: O(n) time and O(1) space
function moveZerosToMiddleOptimize(arr) {
  let n = arr.length; // array ki total length

  // ─────────────────────────────────────────────
  // STEP 1: Saare non-zero numbers aage lao
  // k = write pointer (yahan likhenge next non-zero)
  // ─────────────────────────────────────────────
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[k] = arr[i]; // non-zero ko front mein likho
      k++; // next likhne ki jagah aage badhao
    }
  }
  // Ab k = total non-zero numbers ki count

  let nonZero = k; // e.g. 4  → [1,2,3,4] front mein
  let zeros = n - k; // e.g. 2  → 2 zeros fill karne hain

  // ─────────────────────────────────────────────
  // STEP 2: Middle position nikalo
  // non-zero part ke exactly beech mein zeros jayenge
  // ─────────────────────────────────────────────
  let mid = Math.floor(nonZero / 2);
  // nonZero=4 → mid=2 (index 2 se zeros shuru honge)

  // ─────────────────────────────────────────────
  // STEP 3: Right half ko array ke end mein shift karo
  // IMPORTANT: Peeche se shuru karo, warna data overwrite hoga!
  //   arr = [1,2,3,4,_,_]  →  arr = [1,2,_,_,3,4]
  // ─────────────────────────────────────────────
  let rightStart = mid;
  for (let i = nonZero - 1; i >= rightStart; i--) {
    arr[i + zeros] = arr[i]; // element ko 'zeros' jagah peeche bhejo
  }

  // ─────────────────────────────────────────────
  // STEP 4: Beech ki jagah par zeros bharo
  //   arr = [1,2,_,_,3,4]  →  arr = [1,2,0,0,3,4]
  // ─────────────────────────────────────────────
  for (let i = mid; i < mid + zeros; i++) {
    arr[i] = 0;
  }

  return arr;
  // Final: [1, 2, 0, 0, 3, 4] ✅
}

console.log(moveZerosToMiddleOptimize([1, 0, 2, 0, 3, 4]));
// Output: [1, 2, 0, 0, 3, 4]
