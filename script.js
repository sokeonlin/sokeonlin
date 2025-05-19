document.addEventListener("DOMContentLoaded", () => {
  fetch('products.json')
    .then(response => response.json())
    .then(products => {
      const container = document.getElementById('products-container');
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" style="width:100%">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>السعر: ${product.price} ريال</p>
          <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">أضف إلى السلة</button>
        `;
        container.appendChild(card);
      });
    });
});

function addToCart(id, name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تمت إضافة " + name + " إلى السلة");
}
