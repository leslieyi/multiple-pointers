function maxCharacterCount(string) {
  let obj = {};
  let maxNum = 0;
  let maxChar = "";
  for (let val in string) {
    obj[string[val]] = (obj[string[val]] || 0) + 1; //key value pairs for characters in the string
  }

  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];//setting the max num and the loop will run until it is higher
      maxChar = char;
    }
  }

  return [maxChar, maxNum];
}

console.log(maxCharacterCount("hellllllloo"))
