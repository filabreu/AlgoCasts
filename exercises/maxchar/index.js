// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {};
  let maxChar = str[0];
  let max = 0;

  for (let char of str) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  for (let char in map) {
    if (map[char] > max) {
      maxChar = char;
      max = map[char];
    }
  }

  return maxChar;
}

module.exports = maxChar;
