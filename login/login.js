const loginForm = document.querySelector("#login");
const alertSelector = document.querySelector("#alert");
const alertS = `<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Login Correcto</strong>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
const alertF = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>El usuario no existe</strong>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(user => {
        
        //borra lo input
        loginForm.reset();
        
        //mensaje a mostrar con el pop
        console.log("Inicia sesion")
        alertSelector.innerHTML = alertS;

    })
    .catch((error) => {
        alertSelector.innerHTML = alertF;
    });
})

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        window.location.href = "../app/dash.html";

    } else {
      // No user is signed in.
        console.log("error de autenticacion")
    }
    });