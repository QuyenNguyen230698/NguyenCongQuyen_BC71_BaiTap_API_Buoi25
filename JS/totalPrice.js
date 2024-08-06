// Đặt tỷ lệ và các thông số khác
const taxRate = 0.05;
const shippingRate = 15.0;
const fadeTime = 300;

// Gán hành động
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".product-quantity input").forEach(input => {
    input.addEventListener('change', function () {
      updateQuantity(this);
    });
  });
  // Lấy và hiển thị sản phẩm
  fetchListSP();
});

// Tính toán lại giỏ hàng
function recalculateCart() {
  let subtotal = 0;

  // Tính tổng giá trị hàng hóa
  document.querySelectorAll(".product").forEach(product => {
    subtotal += parseFloat(product.querySelector(".product-line-price").textContent);
  });

  // Tính tổng số tiền
  const tax = subtotal * taxRate;
  const shipping = subtotal > 0 ? shippingRate : 0;
  const total = subtotal + tax + shipping;

  // Cập nhật hiển thị tổng số tiền
  const totalsValue = document.querySelector(".totals-value");
  totalsValue.style.opacity = 0;

  setTimeout(() => {
    document.getElementById("cart-subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("cart-tax").textContent = tax.toFixed(2);
    document.getElementById("cart-shipping").textContent = shipping.toFixed(2);
    document.getElementById("cart-total").textContent = total.toFixed(2);

    const checkout = document.querySelector(".checkout");
    if (total === 0) {
      checkout.style.display = 'none';
    } else {
      checkout.style.display = 'block';
    }

    totalsValue.style.opacity = 1;
  }, fadeTime);
}

// Cập nhật số lượng
function updateQuantity(quantityInput) {
  // Tính toán giá của dòng sản phẩm
  const productRow = quantityInput.closest('.product');
  const price = parseFloat(productRow.querySelector(".product-price").textContent);
  const quantity = quantityInput.value;
  const linePrice = price * quantity;

  // Cập nhật giá của dòng sản phẩm và tính toán lại tổng giỏ hàng
  const linePriceElement = productRow.querySelector(".product-line-price");
  linePriceElement.style.opacity = 0;

  setTimeout(() => {
    linePriceElement.textContent = linePrice.toFixed(2);
    recalculateCart();
    linePriceElement.style.opacity = 1;
  }, fadeTime);
}