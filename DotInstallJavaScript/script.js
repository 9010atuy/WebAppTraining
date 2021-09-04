'use strict';

const ul = document.querySelector('ul');
const input = document.getElementById('input');
const addBtn = document.getElementById('add');

const addList = () => {
  const li = document.createElement('li');
  li.textContent = `${input.value}`;
  ul.appendChild(li);
};

addBtn.addEventListener('click', addList);
