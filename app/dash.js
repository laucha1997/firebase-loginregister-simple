const dashSelector = document.querySelector("#dash");
var idname;


//firebase auth
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    idname = user.displayName;
    console.log("autenticacion bien");
    const aplicativo = `<h1 id="dash">Bienvenido ${idname}</h1>`
    dashSelector.innerHTML = aplicativo
  } else {
    // No user is signed in.
    console.log("error usuario no autenticado");
  }
});

const logoutSelector = document.querySelector("#logout")
logoutSelector.addEventListener("click", e => {
  e.preventDefault();
  firebase.auth().signOut().then(() => {
    window.location.href = "../login/login.html";
  })
})

