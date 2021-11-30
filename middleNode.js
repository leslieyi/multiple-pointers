// Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

function middleNode(head) {
  let fast = (slow = head);
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;

//   let slow = head, fast = head;
//   while (fast !== null) {
//       fast = fast.next;
//       if (fast == null) break;
//       else fast = fast.next;
      
//       slow = slow.next;
//   }
//   return slow;
//   // Time Complexity: O(n)
//   // Space Complexity: O(1)
}
console.log(middleNode([1, 2, 3, 4, 5, 6]));
