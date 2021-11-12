//takes in two strings and checks whether the characters in teh first string form a sub of the characters in teh second string.
//check whether the charac in the first string appera somwhere in the second string WITHOUT changing order
//isSubsequence("hello", "hello world") //true
//isSubsequence("sing", "string")//true
//isSubsequence("abc", "abracadabra")//true
//isSubsequence("abc", "acb") //false

function isSubsequence(string1, string2) {
  if (!string1) return true; //if string is empty then return true

  let i = 0;
  let j = 0;

  while (j < string2.length) {
    if (string1[i] === string2[j]) i++;
    if (i === string1.length) return true; // on the last iteration of the string1
    j++;
  }
  return false
}
console.log(isSubsequence("abc", "abcd"))
// console.log(isSubsequence("hello", "hello world"))