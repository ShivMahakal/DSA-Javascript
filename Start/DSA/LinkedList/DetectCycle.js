// kisi bhi tarike ka loop ya cycle
// repetetive behaviour pta krna hai
// cycle,loop,circle,repetetive main ye lagta hai
// slow and fast
// slow ek run krega node
// fast do node run krega

// slow === fast then ye cycle hai
// agar slow aur fast kabhi equal nahi hote to iska matlab hai ki cycle nahi hai

// fast !== null && fast.next !== null
// to ye condition check krna hoga
// agar fast null ho jata hai ya fast ka next null ho jata hai to iska matlab hai ki cycle nahi hai aur road straight hai

// Step 1: Node class
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Step 2: Main function
function detectCycle(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let pointer = head;

      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
      }

      return pointer;
    }
  }

  return null;
}

// Step 3: Create nodes
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

// Step 4: Connect nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Step 5: Create cycle (pos = 1)
node4.next = node2;

// Step 6: Call function
let result = detectCycle(node1);

// Step 7: Print result
if (result) {
  console.log("Cycle starts at node with value:", result.val);
} else {
  console.log("No cycle found");
}
