function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Hardcoded credentials
  const validUser = "admin";
  const validPass = "admin";

  if (user === validUser && pass === validPass) {
    // Store login flag
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid username or password";
  }
}

function log(message) {
  const terminal = document.getElementById("terminal");
  if (!terminal) return;
  terminal.innerHTML += "> " + message + "<br>";
  terminal.scrollTop = terminal.scrollHeight;
}

// Redirect to login if not logged in
if (window.location.pathname.includes("dashboard.html")) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    window.location.href = "index.html";
  }
}
