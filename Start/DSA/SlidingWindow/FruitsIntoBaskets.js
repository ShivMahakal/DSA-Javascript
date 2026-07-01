function totalFruit(fruits) {
  let k = 2; // Fruit Into Baskets mein sirf 2 baskets hoti hain
  let low = 0;
  let fruitMap = {}; // Object as map
  let distinctCount = 0;
  let maxLength = 0; // -1 nahi, 0 rakhenge

  for (let high = 0; high < fruits.length; high++) {
    // 1. Current fruit ko map mein add karo
    let rightFruit = fruits[high];

    if (!fruitMap[rightFruit]) {
      fruitMap[rightFruit] = 1;
      distinctCount++;
    } else {
      fruitMap[rightFruit]++;
    }

    // 2. Agar distinct fruits 2 se zyada ho gaye, window shrink karo
    while (distinctCount > k) {
      let leftFruit = fruits[low];
      fruitMap[leftFruit]--;

      if (fruitMap[leftFruit] === 0) {
        delete fruitMap[leftFruit];
        distinctCount--;
      }
      low++;
    }

    // 3. Max length update karo
    // Yahan 'if' ki zaroorat nahi kyunki while loop sure karta hai ki distinctCount <= k hai
    maxLength = Math.max(maxLength, high - low + 1);
  }

  return maxLength;
}

let fruits = [1, 2, 3, 2, 2];

console.log(totalFruit(fruits), "totalFruit");

function totalFruitsWithWindow(fruits) {
  let k = 2;
  let low = 0;
  let fruitMap = {};
  let distinctCount = 0;

  let maxLength = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let high = 0; high < fruits.length; high++) {
    let rightFruit = fruits[high];

    if (!fruitMap[rightFruit]) {
      fruitMap[rightFruit] = 1;
      distinctCount++;
    } else {
      fruitMap[rightFruit]++;
    }

    while (distinctCount > k) {
      let leftFruit = fruits[low];
      fruitMap[leftFruit]--;

      if (fruitMap[leftFruit] === 0) {
        delete fruitMap[leftFruit];
        distinctCount--;
      }
      low++;
    }

    // ⭐ window update
    if (high - low + 1 > maxLength) {
      maxLength = high - low + 1;
      startIndex = low;
      endIndex = high;
    }
  }

  return {
    maxLength,
    window: fruits.slice(startIndex, endIndex + 1),
    startIndex,
    endIndex,
  };
}

console.log(totalFruitsWithWindow(fruits), "totalFruit");
