'use strict';
const button = document.getElementById('submit');
let counter = 1;
const clickEvent = () => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = `list${counter}`;
  ul.appendChild(li);
  counter++;
};

button.addEventListener('click', clickEvent);
