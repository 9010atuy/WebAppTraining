'use strict';

const ul = document.querySelector('ul');
const input = document.getElementById('input');
const addBtn = document.getElementById('add');
let counter = 1;
const addList = () => {
  const list = document.createElement('li');
  list.id = `list${counter}`;
  list.textContent = input.value;
  ul.appendChild(list);
  input.value = '';
  input.focus();
  counter++;
};

addBtn.addEventListener('click', addList);
