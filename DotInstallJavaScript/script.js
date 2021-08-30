'use strict';

const doSomething = () => {
  const pList = document.querySelectorAll('p');
  pList.forEach((elem, index) => {
    elem.textContent = `${index + 1}    changed`;
  });
};

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', doSomething);
