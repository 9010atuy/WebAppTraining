'use strict';

// split assignment

const appleLapTop = ['Macbook Pro 13', 'Macbook Pro 16', 'Macbook Air 13'];

const [standardLaptop, hiendLaptop, rightLaptop] = appleLapTop;

const [popularLaptop, ...otherLaptops] = appleLapTop;

console.log(standardLaptop, hiendLaptop, rightLaptop);
console.log(popularLaptop);
console.log(otherLaptops);
console.log(...otherLaptops);

const [mini, pro] = ['$780', '$1500'];
console.log(`mini: ${mini}`);
console.log(`pro: ${pro}`);
const [miniP, proM] = [pro, mini];
console.log(`miniP: ${miniP}`);
console.log(`proM: ${proM}`);
