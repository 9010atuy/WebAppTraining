'use strict';

const strInput = 1;
// const strInput = prompt('input string!');

try {
  const upperStr = strInput.toUpperCase();
  console.log(upperStr);
} catch (ex) {
  console.log(ex);
}

console.log('done');
