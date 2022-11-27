// Evento con el id ingresar
document.getElementById("ingresar").addEventListener("click", function(){
    // Obteniendo los valores escritos   
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    createUserWithEmailAndPassword(auth, email, password)

.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("La cuenta se creó exitosamente ")
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("Presenta fallas en la autentificacipon")
});

})