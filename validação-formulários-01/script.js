// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");


function mostrarPopup(input, label){
    input.addEventListener("focus", ()=>{
        label.classList.add("required-popup")
    })
    
    input.addEventListener("blur", ()=>{
        label.classList.add("required-popup")
    })    
}

// ------ VALIDAÇÃO USERNAME ------ //
let usernameInput = document.getElementById("username");
let usernameLabel = document.getElementById('label[for="username"]');
let usernameHelper = document.getElementById("username-helper")

// ------- VALIDAÇÃO EMAIL ------ //
let emailInput = document.getElementById("email");
let emailLabel = document.getElementById('label[for="email"]');
let emailHerper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel)

emailInput.addEventListener("change", (event)=>{
    if(emailCorreto) {
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");

        emailHelper.classList.remove("visible");
    } else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        
        emailHelper.innerText = "Insira um email válido"
        emailHerper.classList.add("visible");
    }
})

