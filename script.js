const products = [
  // ROPA / CALZADO
  { id: 1, name: "Osito de invierno - GAP", user: "Martina", category: "Ropa / Calzado", price: "$26.000", img: "img/tienda/ropa-calzado/osito-gap.webp", link: "" },

  { id: 2, name: "Osito de invierno - H&M", user: "Martina", category: "Ropa / Calzado", price: "$23.000", img: "img/tienda/ropa-calzado/osito-hm.webp", link: "" },
  
  { id: 3, name: "Pack 2 Ositos Polar - Carter's", user: "Martina", category: "Ropa / Calzado", price: "$29.000", img: "img/tienda/ropa-calzado/pack-ositos.webp", link: "" },
  
  { id: 4, name: "Pack 3 Bodies - Cheeky", user: "Valentina", category: "Ropa / Calzado", price: "$17.000", img: "img/tienda/ropa-calzado/pack3-bodies.webp", link: "" },

  { id: 5, name: "Pack 4 Bodies animales - Buditas", user: "Valentina", category: "Ropa / Calzado", price: "$14.000", img: "img/tienda/ropa-calzado/pack4-bodies.webp", link: "" },
  
  { id: 6, name: "Body flores - Little Akiabara", user: "Julieta", category: "Ropa / Calzado", price: "$12.000", img: "img/tienda/ropa-calzado/bodyflor-la.webp", link: "" },
  
  { id: 7, name: "Enterito flores - Little Akiabara", user: "Julieta", category: "Ropa / Calzado", price: "$17.000", img: "img/tienda/ropa-calzado/enterito-la.webp", link: "" },
  
// LACTANCIA
  { id:8, name: "Almohadón de lactancia - Mamas and Papas", user: "Malena", category: "Lactancia", price: "$45.000", img: "img/tienda/lactancia/almohadon.jpg", link: "" },

  { id:9, name: "Almohadón para amamantar", user: "Raquel", category: "Lactancia", price: "$20.000", img: "img/tienda/lactancia/almohadon-amamantar.jpg", link: "" },

// PORTEO
  { id:10, name: "Mochila porta bebé 4004 - Love", user: "Mora", category: "Porteo", price: "$27.000", img: "img/tienda/porteo/mochila-love.webp", link: "" },

  { id:11, name: "Mochila porta bebé Gera - Duck", user: "Virginia", category: "Porteo", price: "$25.000", img: "img/tienda/porteo/mochila-duck1.jpg", link: "" },

// COCHECITOS / ACCESORIOS
  { id: 12, name: "Huevito Kiev 2023 - Carestino", user: "Rocío", category: "Cochecitos / Accesorios", price: "$57.000", img: "img/tienda/cochecitos-accesorios/huevito-kiev.jpg", link: "" },

  { id: 13, name: "Funda de huevito - Skip Hop", user: "Agustina", category: "Cochecitos / Accesorios", price: "$34.000", img: "img/tienda/cochecitos-accesorios/funda-huevito.jpg", link: "" },
  
  { id:14, name: "Cochecito Kolcraft 2019 - Cloud", user: "Jimena", category: "Cochecitos / Accesorios", price: "$70.000", img: "img/tienda/cochecitos-accesorios/cochecito-cloud.jpg", link: "" },

  { id:15, name: "Cochecito Elite Premium 2023 - Mega Baby", user: "Macarena", category: "Cochecitos / Accesorios", price: "$203.000", img: "img/tienda/cochecitos-accesorios/cochecito-megababy.jpg", link: "" },

  { id:16, name: "Cochecito Aston - Premium Baby", user: "Rosario", category: "Cochecitos / Accesorios", price: "$203.000", img: "img/tienda/cochecitos-accesorios/coche-aston.jpg", link: "" },

  { id:17, name: "Patineta para cochecito - Britax", user: "Paloma", category: "Cochecitos / Accesorios", price: "$57.000", img: "img/tienda/cochecitos-accesorios/patineta.jpg", link: "" },

// CUNAS
  { id:18, name: "Cuna colecho (sin uso) melamina", user: "Camila", category: "Cunas", price: "$100.000", img: "img/tienda/cunas/cuna-melamina.jpg", link: "" },
    
  { id:19, name: "Cuna colecho pino laqueada", user: "Josefina", category: "Cunas", price: "$92.000", img: "img/tienda/cunas/cuna-pino.jpg", link: "" },

  { id:20, name: "Cuna Charriot Paraiso escandinava", user: "Victoria", category: "Cunas", price: "$100.000", img: "img/tienda/cunas/cuna-escandinava.jpg", link: "" },

  { id:21, name: "Cuna colecho madera maciza", user: "Milagros", category: "Cunas", price: "$85.000", img: "img/tienda/cunas/cuna-maciza.jpg", link: "" },

  { id:22, name: "Practicuna Breeze Go - 4Moms", user: "Florencia", category: "Cunas", price: "$85.000", img: "img/tienda/cunas/practicuna-4moms.jpg", link: "" },

  { id:23, name: "Practicuna Pack and Play - Graco", user: "Abril", category: "Cunas", price: "$68.000", img: "img/tienda/cunas/practicuna-graco.jpg", link: "" },

  { id:24, name: "Practicuna Illusion - Joie", user: "Katherine", category: "Cunas", price: "$92.000", img: "img/tienda/cunas/cuna-joie.jpg", link: "" },

// MECEDORAS
  { id:25, name: "Silla mecedora - Bebesit", user: "Isabella", category: "Mecedoras", price: "$51.000", img: "img/tienda/mecedoras/silla-bebesit.jpg", link: "" },

  { id:26, name: "Mecedora - Felcraft", user: "María", category: "Mecedoras", price: "$39.000", img: "img/tienda/mecedoras/mecedora-fel.jpg", link: "" },
    
  { id:27, name: "Silla mecedora - Baby Innovation", user: "Antonella", category: "Mecedoras", price: "45.000", img: "img/tienda/mecedoras/silla-baby.jpg", link: "" },

  { id:28, name: "Mecedora - Fisher Price", user: "Daniela", category: "Mecedoras", price: "$72.000", img: "img/tienda/mecedoras/mecedora-fisher.jpg", link: "" },

// DIVERSIÓN
  { id:29, name: "Móvil cunero (sin uso)", user: "Ornella", category: "Diversión", price: "$29.000", img: "img/tienda/diversion/movil.jpg", link: "" },

  { id:30, name: "Play center - B Kids", user: "Alicia", category: "Diversión", price: "$11.000", img: "img/tienda/diversion/playcenter.jpg", link: "" },

  { id:31, name: "Manta didáctica 3 en 1 - Ok Baby", user: "Bárbara", category: "Diversión", price: "$31.000", img: "img/tienda/diversion/manta.jpg", link: "" },

  { id:32, name: "Gimnasio - Fisher Price", user: "Candela", category: "Diversión", price: "$33.000", img: "img/tienda/diversion/gimnasio.webp", link: "" },

  { id:33, name: "Pelotero - Fisher Price", user: "Emilia", category: "Diversión", price: "$39.000", img: "img/tienda/diversion/pelotero-fisher.jpg", link: "" },

  { id:33, name: "Pelotero 3 en 1- Felcraft", user: "Giselle", category: "Diversión", price: "$45.000", img: "img/tienda/diversion/pelotero-fel.jpg", link: "" },

// SILLITAS DE COMER
  { id:34, name: "Silla de comer 2 en 1 - Baby Pops", user: "Lucero", category: "Sillitas de comer", price: "$65.000", img: "img/tienda/sillitas de comer/silla-baby.jpg", link: "" },

  { id:31, name: "Silla de comer Booster - Glee", user: "Ludmila", category: "Sillitas de comer", price: "$25.000", img: "img/tienda/sillitas de comer/silla-glee.jpg", link: "" },

];

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
  // Verifica si el producto ya está en el carrito
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

// Redirige al simulador de pago
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn-dark.btn').addEventListener('click', () => {
    if (cartItems.length > 0) {
      window.location.href = 'pago.html';
    }
  });

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
  });

  renderProducts();
});
