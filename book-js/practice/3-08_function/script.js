const total = (price) => {
  const tax = 0.1;
  return price + price * tax;
};

console.log(total(800));
console.log(`It's ${total(1200)} &yen;`);
document.getElementById('output').textContent = `It's \xA5${total(1200)} `;
