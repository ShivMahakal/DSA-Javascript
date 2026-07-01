function linkedListCycle(head) {
  // Step 1: Base Case (Edge Cases)
  // Agar list khali hai (head === null) ya sirf ek hi node hai aur uske aage kuch nahi hai,
  // toh cycle ban hi nahi sakti. Isliye false return kar do.
  if (!head || !head.next) {
    return false;
  }

  // Step 2: Pointers set karna
  // Dono kachhue aur khargosh ko starting line (head) par khada kar do.
  let slow = head;
  let fast = head;

  // Step 3: Race shuru karna (Loop)
  // Jab tak fast apne aakhri node ya null tak nahi pohochta, tab tak loop chalate raho.
  // 'fast.next !== null' check karna zaroori hai kyunki fast 2 step leta hai.
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Kachhua ek kadam aage badha
    fast = fast.next.next; // Khargosh do kadam aage badha

    // Step 4: Check karna ki dono mil gaye ya nahi
    // Agar dono ek hi node par khade hain, iska matlab cycle hai!
    if (slow === fast) {
      return true;
    }
  }

  // Step 5: End of list
  // Agar loop khatam ho gaya aur hum yahan aa gaye, iska matlab fast pointer
  // end (null) tak pohoch gaya bina kisi loop ke.
  return false;
}

let head = [3, 2, 0, -4];
let pos = 1;

console.log(linkedListCycle(head, pos)); // Output: true
