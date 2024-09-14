let loggedIn = false; 

let products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 }
];
let cart = [];


function displayProducts() {
  console.log("Available Products:");
  for (let i = 0; i < products.length; i++) {
    console.log(`${i+1}. ${products[i].name} - $${products[i].price}`);
  }
}


function addToCart(productIndex) {
  cart.push(products[productIndex]);
  console.log(`${products[productIndex].name} added to the cart.`);
}


function calculateTotalCost() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}


if (loggedIn) {
  displayProducts();
  addToCart(0); 
  addToCart(2); 
  console.log("Total cost: $" + calculateTotalCost());
} else {
  console.log("Please log in to add items to the cart.");
}