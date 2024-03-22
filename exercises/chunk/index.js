// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunksArr = [];

  for (let i = 0; i < array.length; i += size) {
    chunksArr.push(array.slice(i, i + size));
  }

  return chunksArr;
}

// function chunk(array, size) {
//   const newArr = [];
//   let subArr = [];

//   for (let i = 0; i <= array.length - 1; i++) {
//     subArr.push(array[i]);

//     if (subArr.length === size || i === array.length - 1) {
//       newArr.push(subArr);
//       subArr = [];
//     }
//   }

//   return newArr;
// }

module.exports = chunk;
