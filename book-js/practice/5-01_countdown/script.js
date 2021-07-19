'use strict';
const timer = document.getElementById('timer');

const countdown = (due) => {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor((rest / 1000) % 60);
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 60;
  const days = Math.floor(rest / 1000 / 60 / 60 / 60) % 24;
  const count = [days, hours, min, sec];

  return count;
};

const goal = new Date(2022, 1, 9);

const recalc = () => {
  const counter = countdown(goal);
  const counterTime = `${counter[0]}日${counter[1]}時間${counter[2]}分${counter[3]}秒`;
  timer.textContent = counterTime;
  refresh();
};
const refresh = () => {
  setTimeout(recalc, 1000);
};
recalc();
