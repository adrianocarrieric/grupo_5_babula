window.addEventListener("load", () => {

/* Guarda la clase form e inicia con el cursor en el campo correspondiente */
let form = document.querySelector(".form");
form.email.focus();

/* Aguarda a que los inputs estén completos antes de enviar al servidor */    

form.addEventListener("submit", (e) => {
        
        //* Crea un array vacío donde se van a ir agregando los errores*/
        let fail = [];
        /* Crea una variable y almacena con querySelector tomando el id de cada input */
                let email = document.querySelector("#email");
                let password = document.querySelector("#password");
                
        // --------- EMAIL------------
        
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
            fail.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
        } else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            form.password.focus();
        };

        // --------- PASSWORD ------------
        if (password.value == "") {
            fail.push("El campo contraseña no puede estar vacío");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else if (password.value.length < 8) {
            fail.push("El password debe tener al menos 8 caracteres");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            form.password.focus();
        };

        /* Controla errores e imprime */

        if (fail.length > 0) {
            e.preventDefault();
            let ulFails = document.querySelector(".fails");
            ulFails.classList.add("alert-warning");
            ulFails.innerHTML = "";
            for (let i = 0; i < fail.length; i++) {
                ulFails.innerHTML += "<li>" + fail[i] + "</li>";
            };
        } else {
            alert("La validación de usuario fue exitosa")
            form.submit();
        }
    });
})