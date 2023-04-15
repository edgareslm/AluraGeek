import { services } from "./services.js";

const $form = document.querySelector('.register-product');

$form.addEventListener('submit', event => {
    event.preventDefault();

    const form = new FormData($form);

        form.set("id",uuid.v4());
        // let file = form.get("image");
        // form.delete("url-image");
        // const imagePath = `./assets/images/${file.name}`; // creamos una ruta apartir del nombre del archivo
        const data = Object.fromEntries(form); // creamos un objeto 
        // data.image=imagePath; // dentor del objeto modificamos el valor de image para almacenar la ruta creada

        services.registerProduct(data)
        .then( () =>{
            console.log("logrado");
        })
        .catch((err)=> console.log(err));

    })
