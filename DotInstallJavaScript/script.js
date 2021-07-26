'use strict';
const scoreArray = [80, 90, 70];

console.log(scoreArray);
console.log(scoreArray.length);

scoreArray.push(40, 50);
scoreArray.shift();
scoreArray.unshift(20);
scoreArray.pop();

scoreArray.splice(0, 1);

scoreArray.forEach((score, index) => {
  console.log(`${index}, ${score}`);
});
