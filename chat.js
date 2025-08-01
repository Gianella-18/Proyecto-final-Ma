// Obtener el tema desde la URL
const params = new URLSearchParams(window.location.search);
const tema = params.get("tema") || "Chat";
document.getElementById("chatTopic").innerText = tema;

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("chat-input");
const enviarBtn = document.getElementById("enviarBtn");

// Clave única para almacenar mensajes según el tema
const storageKey = `chat_${tema.toLowerCase().replace(/\s+/g, "_")}`;

// Cargar mensajes guardados o precargados
let mensajes = cargarMensajesDesdeStorage();

if (mensajes.length === 0 && tema.toLowerCase().includes("lactancia")) {
  mensajes = [
    { tipo: "other", usuario: "Lucía", texto: "Hola! Mi bebé tiene 3 meses y está tomando solo pecho. ¿Alguna recomendación para la alimentación complementaria más adelante?" },
    { tipo: "other", usuario: "Martina", texto: "Hola Lu! Lo ideal es que la lactancia sea exclusiva hasta los 6 meses. Después podés ir sumando papillas de a poco y ofrecele agua." },
    { tipo: "other", usuario: "Sofía", texto: "A mí me ayudó mucho introducir primero puré de zapallo y banana. Siempre después de la teta." },
    { tipo: "other", usuario: "Camila", texto: "En mi experiencia, clave tener paciencia y entender que no todos los bebés aceptan la comida a la primera. A mi me funcionó incluirlo en la mesa a la hora del almuerzo, a medida que pasaba el tiempo y nos veía comer, comenzó a pedir comida." }
  ];
  guardarMensajesEnStorage(mensajes);
}

renderizarMensajes(mensajes);

enviarBtn.addEventListener("click", enviarMensaje);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") enviarMensaje();
});

function enviarMensaje() {
  const mensaje = input.value.trim();
  if (mensaje === "") return;

  const nuevoMensaje = { tipo: "user", usuario: "Vos", texto: mensaje };
  mensajes.push(nuevoMensaje);
  guardarMensajesEnStorage(mensajes);
  renderizarMensajes(mensajes);
  input.value = "";
}

function renderizarMensajes(lista) {
  chatBox.innerHTML = "";
  lista.forEach(msg => {
    const burbuja = document.createElement("div");
    burbuja.className = msg.tipo === "user" ? "bubble-user" : "bubble-other";

    const iniciales = msg.usuario
      .split(" ")
      .map(p => p[0])
      .join("")
      .toUpperCase();

    burbuja.innerHTML = `
      <div class="inicial">${iniciales}</div>
      <div class="texto"><strong>${msg.usuario}:</strong> ${msg.texto}</div>
    `;

    chatBox.appendChild(burbuja);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

function guardarMensajesEnStorage(lista) {
  localStorage.setItem(storageKey, JSON.stringify(lista));
}

function cargarMensajesDesdeStorage() {
  const data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data) : [];
}
