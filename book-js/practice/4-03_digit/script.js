'use strict';

const output = document.getElementById('output');
const contentArray = [
  'Stella By Starlight',
  'Satin Doll',
  'Caravan',
  'Besame Mucho',
  'My Favorte Things',
  'Taking A Chance On Love',
  'Fly to the Moon',
  'Waltz For Debby',
  'Willow Weep For Me',
  'Bluesette',
];

function paddingZero(num, digits) {
  let paddingNum = num;
  for (let i = 0; i < digits - String(num).length; i++) {
    paddingNum = '0' + paddingNum;
  }
  return paddingNum;
}

contentArray.forEach((content, index) => {
  const p = document.createElement('p');
  p.id = 'content' + (index + 1);
  p.textContent = `${paddingZero(index + 1, 2)}. ${content}`;
  output.appendChild(p);
});
