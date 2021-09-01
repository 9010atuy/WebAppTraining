'use strict';
const add = document.getElementById('add');
const copy = document.getElementById('copy');
const ul = document.querySelector('ul');

let counter = 1;
const addF = () => {
  const li = document.createElement('li');
  li.textContent = `list${counter}`;
  li.id = `list${counter}`;
  ul.appendChild(li);
  counter++;
};

const copyF = () => {
  const list3 = document.querySelectorAll('li')[2];
  const copyElem = list3.cloneNode('true');
  const list5 = document.querySelectorAll('li')[4];
  ul.insertBefore(copyElem, list5);
};

add.addEventListener('click', addF);
copy.addEventListener('click', copyF);
