// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

function sortedSquared(array) {
  let start = 0;
  let end = array.length - 1;
  let position = end;
  let result = [];

  while (start <= end) {
    if (array[start] ** 2 > array[end] ** 2) {
      result[position--] = array[start++] ** 2; //put it at the end if the start is bigger
    } else {
      result[position--] = array[end--] ** 2; //the end, remains at the end 
    }
  }

  return result;
}
console.log(sortedSquared([-7,-3,2,3,11]));