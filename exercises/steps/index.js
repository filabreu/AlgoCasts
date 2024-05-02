// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let stairs = [];
  let step = '';

  while (stairs.length < n) {
    while (step.length < n) {
      step += step.length <= stairs.length ? '#' : ' ';
    }
    stairs.push(step);
    step = '';
  }

  for (let stepStr of stairs) {
    console.log(stepStr);
  }
}

module.exports = steps;
