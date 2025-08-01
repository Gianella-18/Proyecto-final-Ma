
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    if (!nombre || !email || !mensaje) {
      alert("Por favor, completá todos los campos obligatorios.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Ingresá un correo electrónico válido.");
      return;
    }
  
    document.getElementById('confirmacion').style.display = 'block';
    this.reset();
  });
  