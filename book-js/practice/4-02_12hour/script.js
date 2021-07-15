'use strict';

const time = document.getElementById('time');

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
let hour12;
let ampm;
if (hour > 12) {
  hour12 = hour - 12;
  ampm = 'p.m.';
} else {
  hour12 = hour;
  ampm = 'p.m.';
}
time.textContent = `${year}/${month}/${date} ${hour}:${minute}:${second}${ampm}`;
// time.textContent = `${year}/${month}/${date} ${hour}:${minute}:${second}`;
