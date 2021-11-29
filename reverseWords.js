// Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 
// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

function reverseWords(s){
    // return s.split(' ').map((word) => word.split('').reverse().join('')).join(' ')

    let reversed = '';//keeping track of reversed strings.
    let word = '';//keeping track of the letters
    for (let element of s) {
        if (element === ' ') {
            reversed += word + element;
            word = ''; //setting word to blank
            // console.log(reversed)
        } else {
            word = element + word;
            // console.log(word)
        }
    }
    return reversed + word;

}

console.log(reverseWords("Let's take LeetCode contest"))