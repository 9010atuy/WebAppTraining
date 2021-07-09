const total = (price) => {
  const tax = 0.1;
  return price + price * tax;
};

console.log(total(800));
