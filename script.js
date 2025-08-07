let products = [];
let currentPage = 1;
let itemsPerPage = 6;
let currentCategory = 'all';
let cartItems = [];

function renderProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  const filtered = currentCategory === 'all' ? products : products.filter(p => p.category === currentCategory);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(start, start + itemsPerPage);

  currentItems.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card h-100">
        <a href="${product.link}" target="_blank">
          <img src="${product.img}" class="card-img-top" alt="${product.name}">
        </a>
        <div class="card-body text-center">
          <h6>${product.name}</h6>
          <small class="text-muted">${product.category}</small><br>
          <small class="text-muted">Publicado por: ${product.user}</small>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-outline-dark btn-sm" onclick="addToCart(${product.id})">Agregar</button>
        </div>
      </div>`;
    list.appendChild(col);
  });

  renderPagination(filtered.length);
}

function addToCart(productId) {
  if (cartItems.some(item => item.id === productId)) return;

  const product = products.find(p => p.id === productId);
  cartItems.push(product);
  document.getElementById('cart-count').innerText = cartItems.length;
  updateCartModal();
}

function updateCartModal() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.innerHTML = `
      <div class="row g-0 align-items-center">
        <div class="col-md-2 text-center">
          <img src="${item.img}" class="img-fluid rounded-start" alt="${item.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h6 class="card-title mb-0">${item.name}</h6>
            <small class="text-muted">${item.category} - ${item.price}</small>
          </div>
        </div>
        <div class="col-md-2 text-end pe-3">
          <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `;
    cartList.appendChild(card);

    total += parseFloat(item.price.replace('$', '').replace('.', '').replace(',', '.'));
  });

  document.getElementById('cart-total').innerText = `$${total.toLocaleString('es-AR')}`;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  document.getElementById('cart-count').innerText = cartItems.length;
  updateCartModal();
}

function renderPagination(totalItems) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.className = `page-item ${i === currentPage ? 'active' : ''}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      renderProducts();
    });
    pagination.appendChild(li);
  }
}

function filterByCategory(category) {
  currentCategory = category;
  currentPage = 1;
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-category="${category}"]`).classList.add('active');
  renderProducts();
}

// Carga productos desde backend y configura eventos
document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:5000/api/productos")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      renderProducts();
    })
    .catch((error) => {
      console.error("Error al cargar productos desde el backend:", error);
    });

  document.querySelector('.btn-dark.btn').addEventListener('click', () => {
    if (cartItems.length > 0) {
      window.location.href = 'pago.html';
    }
  });

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
  });
});
