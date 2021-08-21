'use strict';

const scores = [20, 30, 15];
let sum = 0;
scores.forEach(score => {
  sum += score;
});
console.log(`sum: ${sum}`);
const avg = sum / scores.length;
console.log(`avg: ${avg}`);
console.log(Math.floor(avg));
console.log(Math.ceil(avg));
console.log(Math.round(avg));

const ramdom = Math.floor(Math.random(6) * 100);
console.log(ramdom);
