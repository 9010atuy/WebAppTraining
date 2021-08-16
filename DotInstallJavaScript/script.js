'use strict';

const dateNow = new Date();
const year = dateNow.getFullYear();
const month = dateNow.getMonth();
const day = dateNow.getDay();

const dateArray = [year, month, day];
console.log(dateArray);

const strDate = dateArray.join('.');
console.log(strDate);

const dArray = strDate.split('.');
console.log(dArray);

const [y, m, d] = dateArray;
console.log(y);
console.log(m);
console.log(d);
