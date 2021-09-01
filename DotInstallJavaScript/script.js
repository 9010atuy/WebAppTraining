'use strict';

const doSomething = () => {
  const pList = document.querySelectorAll('p');
  pList.forEach((node, index) => {
    if (node.classList.contains('my-text-style')) {
      node.className = '';
    } else {
      node.classList.add('my-text-style');
      node.classList.add('my-border-style');
    }
  });
};

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', doSomething);
