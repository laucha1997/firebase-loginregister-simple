const registerSelector = document.querySelector("#register");
const alertSelector = document.querySelector("#alert");
const alert = `<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Registro Correcto</strong>
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;


registerSelector.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    
    //Firebase Auth
    var user = firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        user.updateProfile({
        displayName: firstname + lastname,
    }).then(function() {
        // Update successful.
        registerSelector.reset();
        alertSelector.innerHTML = alert;
    }).catch(function(error) {
      // An error happened.
        console.log("error del update")
    });
    } else {
        // No user is signed in.
        console.log("usuario no registrado")
    }
})

