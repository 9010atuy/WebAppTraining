'use strict';

// split assignment

const appleLapTops = ['Macbook Pro 13', 'Macbook Pro 16', 'Macbook Air 13'];

const newAppleLapTops = appleLapTops.map(laptop => laptop + ' 2021 Oct');
newAppleLapTops.forEach(newLaptop => console.log(newLaptop));
