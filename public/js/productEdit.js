window.addEventListener("full", () => {

    let form = document.querySelector(".form");
    form.title.focus();

/* Aguarda a que los inputs estén completos antes de enviar al servidor */    
    form.addEventListener("submit", (e) => {
        
/* Crea un array vacío donde se van a ir agregando los errores*/
        let fail = [];
/* Crea una variable y almacena con querySelector tomando el id de cada input */
        let title = document.querySelector("#title");
        let description = document.querySelector("#description");
        let ingredients = document.querySelector("#ingredients");
        let price = document.querySelector("#price");
        let todaysDay = document.querySelector("#todaysDay");
        let category = document.querySelector("#category");
        let productImage = document.querySelector("#image");
     
       // --------- TITLE ------------
        if (title.value == "") {
            fail.push("El campo título no puede estar vacío");
            title.classList.remove("is-valid");
            title.classList.add("is-invalid");
        } else if (password.value.length < 5) {
            fail.push("El campo título debe tener al menos 5 caracteres");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        }else {
            title.classList.add("is-valid");
            title.classList.remove("is-invalid");
            form.description.focus();
        };

        // --------- DESCRIPTION ------------
        if (description.value == "") {
            fail.push("El campo descripción no puede estar vacío");
            description.classList.remove("is-valid");
            description.classList.add("is-invalid");
        } else if (password.value.length < 20) {
            fail.push("El campo descripción debe tener al menos 20 caracteres");
            description.classList.remove("is-valid");
            description.classList.add("is-invalid");
        }else {
            description.classList.add("is-valid");
            description.classList.remove("is-invalid");
            form.ingredients.focus();
        };

        // --------- INGREDIENTS ------------
        if (ingredients.value == "") {
            fail.push("El campo ingredientes no puede estar vacío");
            ingredients.classList.remove("is-valid");
            ingredients.classList.add("is-invalid");
        } else {
            ingredients.classList.add("is-valid");
            ingredients.classList.remove("is-invalid");
            form.price.focus();
        };
        
        // --------- PRICE ------------
        if (price.value == "") {
            fail.push("Debe tener un precio");
            price.classList.remove("is-valid");
            price.classList.add("is-invalid");
        } else {
            price.classList.add("is-valid");
            price.classList.remove("is-invalid");
            form.todaysDays.focus();
        };

        // --------- TODAYS DAY ------------
        if (todaysDay.value == "") {
            fail.push("Debe seleccionar una opción");
            todaysDay.classList.remove("is-valid");
            todaysDay.classList.add("is-invalid");
        } else {
            todaysDay.classList.add("is-valid");
            todaysDay.classList.remove("is-invalid");
            form.category.focus();
        };

        // --------- CATEGORY ------------
        if (category.value == "") {
            fail.push("Debe seleccionar una opción");
            category.classList.remove("is-valid");
            category.classList.add("is-invalid");
        } else {
            category.classList.add("is-valid");
            category.classList.remove("is-invalid");
            form.productImage.focus();
        };

         // --------- PRODUCTO IMAGE ------------
         let allowedExtension = /(.jpg|.jpeg|.png|.gif)$/i;
         if (!allowedExtension.exec(productImage.value)) {
            fail.push("Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.");
            productImage.classList.remove("is-valid");
            productImage.classList.add("is-invalid");
        } else {
            productImage.classList.add("is-valid");
            productImage.classList.remove("is-invalid");
            form.productImage.focus();
        };
        
        /* Controlador de errores */

        if (fail.length > 0) {
            e.preventDefault();
            let ulFails = document.querySelector(".fails");
            ulFails.classList.add("alert-warning");
            ulFails.innerHTML = "";
            for (let i = 0; i < fail.length; i++) {
                ulFails.innerHTML += "<li>" + fail[i] + "</li>";
            };
        } else {
            alert("La validación fue exitosa")
            form.submit();
        }
    });
})