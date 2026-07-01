function findDuplicate(nums) {
  // Starting line (index 0) par dono pointers set karo
  let slow = 0;
  let fast = 0;

  // Phase 1: Meeting point dhoondo
  while (true) {
    // Phase 1: Kachhua aur Khargosh ki race (Cycle dhoondo)
    slow = nums[slow]; // Kachhua 1 jump (slow = slow.next)
    fast = nums[nums[fast]]; // Khargosh 2 jumps (fast = fast.next.next)

    // Jab dono mil jayein, cycle mil gayi! Race roko.
    if (slow === fast) {
      break;
    }
  }

  // Phase 2: Starting point (duplicate) dhoondo
  slow = 0; // Apki batayi hui optimization! kachhua starting line (index 0) par rakho
  while (slow !== fast) {
    // Ab dono ko 1-1 step chalao jab tak wo mil nahi jaate
    slow = nums[slow]; //  kachhua 1 step
    fast = nums[fast]; // Khargosh  1 step
  }
  // Jahaan ye dono mile, wahi humara duplicate number hai!
  return slow;
}

// --- YAHAN HUM FUNCTION KO CALL KAR RAHE HAIN ---

// Example 1 test kar rahe hain
const nums1 = [1, 3, 4, 2, 2];
const result1 = findDuplicate(nums1);
console.log("Example 1 Output:", result1); // Expected Output: 2
