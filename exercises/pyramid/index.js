// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' p.l 0, l.l 0,
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'


function pyramid(n) {
  const width = n * 2 - 1;
  const pyramid = [];
  let level = '';

  while(pyramid.length < n) {
    while(level.length < width) {
      level += level.length < n - pyramid.length - 1 || level.length > n + pyramid.length - 1 ? ' ' : '#';
    }
    pyramid.push(level);
    level = '';
  }

  for(let levelStr of pyramid) {
    console.log(levelStr);
  }
}

module.exports = pyramid;
