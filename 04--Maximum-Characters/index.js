// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (let char of str.split("")) {
    !chars[char] ? (chars[char] = 1) : chars[char]++;
  }
  let maxCharacter;
  let max = 0;
  for (let c in chars) {
    if (chars[c] > max) {
      max = chars[c];
      maxCharacter = c;
    }
  }
  return maxCharacter;
}
maxChar("abcccccccd");
module.exports = maxChar;
