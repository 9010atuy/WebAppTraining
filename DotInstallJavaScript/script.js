'use strict';
const add = document.getElementById('add');
const copy = document.getElementById('copy');
const delRemove = document.getElementById('remove');
const delNode = document.getElementById('delete-node');

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

const deleteRemoveF = () => {
  const firstList = document.querySelectorAll('li')[0];
  firstList.remove();
};

const delNodeF = () => {
  const targeNode = document.querySelectorAll('li')[3];
  ul.removeChild(targeNode);
};

add.addEventListener('click', addF);
copy.addEventListener('click', copyF);
delRemove.addEventListener('click', deleteRemoveF);
delNode.addEventListener('click', delNodeF);
