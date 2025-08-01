document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const productId = button.dataset.id;
        const productName = button.dataset.name;
        const productPrice = button.dataset.price;
        const productImage = button.dataset.image;
  
        const exists = cart.find((item) => item.id === productId);
  
        if (!exists) {
          cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
          });
  
          localStorage.setItem("cart", JSON.stringify(cart));
          button.textContent = "Agregado";
          button.disabled = true;
        }
      });
    });
  });
  