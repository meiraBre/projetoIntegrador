var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value.trim();
document.getElementById("loginForm").addEventListener("submit", function(event) {

    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      event.preventDefault();
    }
});



