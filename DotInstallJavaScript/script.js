'use strict';
const btn = document.getElementById('submit');
const doSomethingClick = () => {
  console.log('clicked');
};

const doSomething = e => {
  console.log(e.clientX, e.clientY);
};

const keyDownEvent = e => {
  console.log(e.key);
};

btn.addEventListener('dblclick', doSomethingClick);
document.addEventListener('mousemove', doSomething);
document.addEventListener('keydown', keyDownEvent);
