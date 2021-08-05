'use strict';
const scoreArray = [80, 90, 70];
const otherScoreArray = [10, 20, 30];

scoreArray.push(otherScoreArray);
console.log(scoreArray);
scoreArray.push(...otherScoreArray);
console.log(scoreArray);

const sum = (a, b) => {
  return a + b;
};

console.log(sum(...scoreArray));
