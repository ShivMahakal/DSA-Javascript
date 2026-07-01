function solveWithLogs(arr, k) {
  let n = arr.length;

  // Step 1: Pehle k elements ka sum nikalo (Initial Window)
  let sum = 0;
  console.log("--- Step 1: Initial Window Setup ---");
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
    console.log(`Adding arr[${i}] (${arr[i]}) -> Current Sum: ${sum}`);
  }

  let res = sum;
  console.log(`Initial Max Sum (res): ${res}`);
  console.log("-------------------------------------");

  // Pointers set karein
  let low = 0; // Ye element window se bahar jayega (Remove)
  let high = k; // Ye element window mein andar aayega (Add)

  console.log("--- Step 2: Sliding the Window ---");

  // Step 2: Slide the window
  while (high < n) {
    console.log(`\nIterating for High Index: ${high}`);
    console.log(`   > Old Sum: ${sum}`);
    console.log(`   > Removing arr[${low}] (${arr[low]})`);
    console.log(`   > Adding arr[${high}] (${arr[high]})`);

    // Main Logic: Add new, Remove old
    sum = sum + arr[high] - arr[low];

    console.log(`   > New Sum: ${sum}`);

    // Update Maximum Result
    let prevRes = res;
    res = Math.max(res, sum);
    console.log(`   > Max Sum Updated: ${prevRes} -> ${res}`);

    // Move pointers forward
    low++;
    high++;
  }

  return res;
}

// Run Code
const arr = [100, 200, 300, 400];
const k = 2;
console.log("\nFinal Answer:", solveWithLogs(arr, k));

function solveWithLogsNew(arr, k) {
  let n = arr.length;

  // Step 1: Pehle k elements ka sum nikalo (Initial Window)
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }

  // Pointers set karein
  let low = 0;
  let high = k - 1;
  let res = sum;

  // Step 2: Slide the window
  while (high < n - 1) {
    sum = sum - arr[low]; // remove old low
    low++;

    high++;
    sum = sum + arr[high]; // add new high

    res = Math.max(res, sum);
  }

  return res;
}

console.log("\nFinal Answer:", solveWithLogsNew(arr, k));
