// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString(s) {
    let start = 0 ;
    let end = s.length - 1 ;
    while (start < end ) {
        [s[start], s[end]] = [s[end], s[start]]
        start++;
        end--;
    }

}