'use strict';

const date = new Date();
console.log(`${date.getFullYear()}年
 ${date.getMonth() + 1}月 
 ${date.getDate()}日 
 ${date.getHours()}時 
 ${date.getMinutes()}分
 ${date.getSeconds()}秒
 ${date.getMilliseconds()}
 `);

const nextMonthDate = date;
console.log(typeof nextMonthDate);
console.log(nextMonthDate.getMonth(), nextMonthDate.getDate());
