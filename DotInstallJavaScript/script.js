'use strict';

// split assignment

const appleLapTops = ['Macbook Pro 13', 'Macbook Pro 16', 'Macbook Air 13'];

const proSeries = appleLapTops.filter(laptop => laptop.indexOf('Pro') !== -1);
console.log(...proSeries);
