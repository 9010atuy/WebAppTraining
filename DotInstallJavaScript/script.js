'use strict';

const doSomething = () => {
  const pList = document.querySelectorAll('p');
  pList.forEach((node, index) => {
    node.textContent = `${index + 1}    changed`;
    node.title = `changed tooltip${index + 1}`;
    node.style.backgroundColor = 'black';
    node.style.color = 'white';
  });
};

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', doSomething);
