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

const ol = document.querySelector('ol');
const radio = document.getElementsByName('input-color');
const addRadio = document.getElementById('add-color');

const addRadioInput = () => {
  const radios = document.getElementsByName('input-color');
  let selectedValue = '';
  const li = document.createElement('li');
  radios.forEach(radio => {
    if (radio.checked) {
      selectedValue = radio.value;
    }
  });
  li.textContent = selectedValue;
  ol.appendChild(li);
};

addRadio.addEventListener('click', addRadioInput);
