'use strict';

let i = 0;
const showTime = () => {
  console.log(new Date());
  i++;
  if (i > 2) {
    clearInterval(intervalId);
  }
};

// setInterval: 指定した関数を一定時間感覚で繰り返し呼び出す。
const intervalId = setInterval(() => {
  showTime();
}, 1000);
