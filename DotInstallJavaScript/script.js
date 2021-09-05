'use strict';

const textarea = document.querySelector('textarea');

textarea.addEventListener('focus', () => {
  console.log('focused');
});

textarea.addEventListener('blur', () => {
  console.log('blured');
});

textarea.addEventListener('input', e => {
  console.log(textarea.value, textarea.value.length);
});
