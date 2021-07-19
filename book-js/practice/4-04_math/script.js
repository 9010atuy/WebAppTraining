'use strict';

const pi = document.getElementById('pi');
const int = document.getElementById('int');
const test = document.getElementById('test');

pi.textContent = Math.PI;
int.textContent = Math.floor(Math.PI);

const roundDown = (num, digits) => {
  const time = Math.pow(10, digits);
  return Math.floor(num * time) / time;
};

test.textContent = roundDown(Math.PI, 5);
