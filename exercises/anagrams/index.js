// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charMapA = {};
  let charMapB = {};

  for (let char of stringA.replace(/[\W\s]/g, '').toUpperCase()) {
    charMapA[char] = charMapA[char] ? charMapA[char] + 1 : 1;
  }

  for (let char of stringB.replace(/[\W\s]/g, '').toUpperCase()) {
    charMapB[char] = charMapB[char] ? charMapB[char] + 1 : 1;
  }

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
