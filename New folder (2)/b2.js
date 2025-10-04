let products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
];

function getProductById(id) {
  return products.filter((p) => p.id === id);
};
console.log(getProductById(3));

function getTotalPrice() {
  return products.reduce((a, b) => a + b.price,0);
};
console.log(getTotalPrice());

products.push({ id: 4, name: "Headphone", price: 200 });
console.log(products);

let a = products.filter((p) => p.price > 700).map(p => p.name);
console.log(a);
