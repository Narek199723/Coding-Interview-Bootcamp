// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// * First solution
// function palindrome(str) {
//   const reversedString = str.split("").reverse().join("");
//   return str === reversedString;
// }

// * Second solution
function palindrome(str) {
  return str
    .split("")
    .every((char, i, array) => char === str[array.length - i - 1]);
}

module.exports = palindrome;
