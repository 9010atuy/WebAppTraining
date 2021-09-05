'use strict';
const btn = document.getElementById('submit');
const doSomethingClick = () => {
  console.log('clicked');
};

const doSomething = () => {
  console.log('action');
};

btn.addEventListener('dblclick', doSomethingClick);
document.addEventListener('mousemove', doSomething);
