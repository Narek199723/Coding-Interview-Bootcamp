// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ! First solution
// const reverse = (str) => {
//     const strArr = str.split("").reverse().join("");
//     return strArr;
// };

// ! Second Solution
// const reverse = (str) => str.split("").reduce((acc, cur) => cur + acc, "");

// ! Third possible solution
// const reverse = (str) => {
//   let reversed = "";

//   for (const character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// };

// module.exports = reverse;

// command for jest to work and check  jest 01--ReverseString/test.js --watch

// ! Debugger

const reverse = (str) => {
  debugger;
  const strArr = str.split("").reverse().join("");
  return strArr;
};

reverse("asdf");

module.exports = reverse;
