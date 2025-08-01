let chatBox = document.getElementById("chat-box");
let chatInput = document.getElementById("chat-input");
let chatModalLabel = document.getElementById("chatModalLabel");

document.querySelectorAll('[data-bs-target="#chatModal"]').forEach(btn => {
  btn.addEventListener("click", () => {
    const topic = btn.getAttribute("data-topic");
    chatModalLabel.innerText = topic;
    chatBox.innerHTML = "";
  });
});

function enviarMensaje() {
  const texto = chatInput.value.trim();
  if (texto !== "") {
    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje");
    mensaje.innerText = texto;
    chatBox.appendChild(mensaje);
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
