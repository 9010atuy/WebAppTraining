'use strict';

const jsBook = { title: 'Introduction JavaScript', price: 3200, stock: 3 };
const ouptut = document.getElementById('stock_data');

const tr = document.createElement('tr');

for (const property in jsBook) {
  const td = document.createElement('td');
  td.textContent = jsBook[property];
  // プロパティ指定
  td.id = property;
  tr.appendChild(td);
}

ouptut.appendChild(tr);
