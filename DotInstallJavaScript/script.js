'use strict';

const doSomething = () => {
  // document.getElementById('title').textContent = 'changed';
  // document.querySelector('p').textContent = 'changed';
  const pList = document.querySelectorAll('p');
  pList.forEach((elem, index) => {
    console.log(elem);
    elem.textContent = `${index + 1}    changed`;
  });
};

setTimeout(doSomething, 1000);
