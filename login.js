function toggleForm(form) {
  document.getElementById("login-form").classList.remove("active");
  document.getElementById("register-form").classList.remove("active");
  document.getElementById(form + "-form").classList.add("active");
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Admin credentials
  if (email === "admin@ma.com" && password === "admin123") {
    window.location.href = "admin-panel.html";
  } else {
    localStorage.setItem("userEmail", email);
    window.location.href = "user-panel.html";
  }
}

function register(event) {
  event.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  window.location.href = "user-panel.html";
}
