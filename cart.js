document.addEventListener("DOMContentLoaded", () => {
  const itemsContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    itemsContainer.innerHTML = "<p>السلة فارغة.</p>";
    totalContainer.textContent = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>الكمية: ${item.quantity}</p>
      <p>السعر للوحدة: ${item.price} ريال</p>
      <p>المجموع: ${item.price * item.quantity} ريال</p>
      <button onclick="removeItem(${index})">إزالة</button>
    `;
    total += item.price * item.quantity;
    itemsContainer.appendChild(itemDiv);
  });

  totalContainer.textContent = "الإجمالي: " + total + " ريال";
});

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
