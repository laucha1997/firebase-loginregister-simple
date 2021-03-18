const registerSelector = document.querySelector("#register");
const alertSelector = document.querySelector("#alert");
const alert = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Error en cargar usuario</strong>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;


registerSelector.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;
    
    //Firebase Auth
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(userCredential => {
        
        //borra lo input
        registerSelector.reset();
        
        //mensaje a mostrar con el pop
        console.log("registrado")

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
                window.location.href = "../register/dataRegister.html";
            } else {
              // No user is signed in.
                alertSelector.innerHTML = alert;
            }
            });
        
                
        
        
        
    })
})


