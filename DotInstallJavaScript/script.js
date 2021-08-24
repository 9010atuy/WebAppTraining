'use strict';

let i = 0;
const showTime = () => {
  console.log(new Date());
  i++;
  const timeoutId = setTimeout(showTime, 1000);
  if (i > 5) {
    clearTimeout(timeoutId);
  }
};

showTime();

let j = 0;
const dice = () => {
  console.log(Math.floor(Math.random() * 6 + 1));
  j++;
  console.log(`j: ${j}`);
  if (j > 4) {
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(dice, 1000);
