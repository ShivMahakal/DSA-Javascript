function findCombination(arr, target, index, current, sum) {
    if (sum === target) {
        console.log(current); // Print valid combination
        return;
    }

    if (index >= arr.length || sum > target) {
        return;
    }

    // Include the current element
    current.push(arr[index]);
    findCombination(arr, target, index + 1, current, sum + arr[index]);

    // Exclude the current element
    console.log(current,"Current123")
    current.pop();
    findCombination(arr, target, index + 1, current, sum);
}

// Given array and target number
let arr = [4, 5, 6, 7, 8, 1, 10, 9, 65];
let target = 27;

// Start recursion
findCombination(arr, target, 0, [], 0);
