const findMiddle = (head) => {
  // Agar list khali hai
  if (!head) return null;

  let slow = head;
  let fast = head;

  // Fast ko tab tak chalao jab tak wo aakhri ya aakhri se pehle node par na ho
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // 1 kadam
    fast = fast.next.next; // 2 kadam
  }

  // Jab loop khatam hoga, slow middle mein hoga
  return slow;
};

// Example Usage:
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const createListFromArray = (arr) => {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
};

let myLongList = createListFromArray([1, 2, 3, 4, 5]);
let middleNode = findMiddle(myLongList);
console.log("Middle Node Value:", middleNode.val);

// Linked List: 1 -> 2 -> 3 -> 4 -> 5
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// const createList = (totalNodes) => {
//   // 1. Pehla node (Head) banao
//   let head = new ListNode(1);

//   // 2. Ek 'current' pointer rakho jo abhi head par hai
//   let current = head;

//   // 3. Loop chalao baaki nodes ke liye
//   for (let i = 2; i <= totalNodes; i++) {
//     // Naya node banao aur use current ke 'next' mein daalo
//     current.next = new ListNode(i);

//     // AB SABSE ZAROORI STEP:
//     // current ko naye node par shift kar do taaki agli baar
//     // naya node uske aage jud sake
//     current = current.next;
//   }

//   return head; // Sirf head return karenge, poori chain uske peeche judi hai
// };
