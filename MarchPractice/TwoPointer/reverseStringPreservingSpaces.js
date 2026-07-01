function reverseStringPreservingSpaces(s) {
  // String ko array mein convert karo taaki in-place swap ho sake
  // ("abc de" → ['a','b','c',' ','d','e'])
  let arr = s.split("");

  let left = 0; // left pointer  → index 0 se shuru
  let right = arr.length - 1; // right pointer → last index se shuru

  // Jab tak dono pointers cross na ho jayein
  while (left < right) {
    // Agar left wala space hai → use skip karo, aage badho
    if (arr[left] === " ") {
      left++;
      continue;
    }

    // Agar right wala space hai → use skip karo, peeche ao
    if (arr[right] === " ") {
      right--;
      continue;
    }

    // Dono non-space hain → swap karo!
    // "abc de" step 1: arr[0]='a' ↔ arr[5]='e'
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++; // left pointer ek aage
    right--; // right pointer ek peeche
  }

  // Array wapas string mein join karo
  return arr.join("");
}

// Tests
console.log(reverseStringPreservingSpaces("abc de"));
// → "edc ba"   ✅ space index 3 pe hi hai

console.log(reverseStringPreservingSpaces("Help others"));
// → "sreh topleH"  ✅ space index 4 pe hi hai

console.log(reverseStringPreservingSpaces("internship at geeks for geeks"));
// → "skeegrofsk ee gtapi hsn retni"  ✅
