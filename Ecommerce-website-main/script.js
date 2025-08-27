const products = [
  { id: 1, name: "T-Shirt", price: 15.99, image: "images/tshirt.jpg" },
  { id: 2, name: "Jeans", price: 39.99, image: "images/jeans.jpg" },
  { id: 3, name: "Sneakers", price: 59.99, image: "images/sneakers.jpg" },
  { id: 4, name: "Hat", price: 12.49, image: "images/hat.jpg" }
];

let cart = [];

const productsContainer = document.getElementById("products");
const cartItemsList = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");
function renderProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(card);
  });
}
window.addToCart = function(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartUI();
}
function updateCartUI() {
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
}
clearCartBtn.addEventListener("click", () => {
  cart = [];
  updateCartUI();
});
window.onload = renderProducts;

