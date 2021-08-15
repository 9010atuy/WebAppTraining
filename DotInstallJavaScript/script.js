'use strict';

// split assignment

const appleLapTops = ['Macbook Pro 13', 'Macbook Pro 16', 'Macbook Air 13'];
const series2021 = appleLapTops.map(laptop => laptop + ' 2021');
console.log(...series2021);
const proSeries = appleLapTops.filter(laptop => laptop.indexOf('Pro') !== -1);
console.log(...proSeries);

const laptopPro13 = {
  name: 'Macbook Pro 13',
  price: '$130',
  stock: 20,
};
console.log(laptopPro13);
console.log(laptopPro13.name);
console.log(laptopPro13['name']);
console.log(laptopPro13.stock);

// update propery value
laptopPro13.stock = 18;
console.log(laptopPro13.stock);

// add property
laptopPro13.color = 'dark gray';
console.log(laptopPro13);

// del property
delete laptopPro13.color;
console.log(laptopPro13);
