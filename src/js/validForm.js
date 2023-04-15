const $form = document.getElementById("contact")
const $inputs = document.querySelectorAll(".input");
const $submit = document.querySelector("[data-button]");

$form.addEventListener("submit",(event)=>{
event.preventDefault();
});

const expreg = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^(?=\w[a-zA-Z]).{4,250}$/ig,
}

const messagesError = {
    name:{
        valueMissing: "El campo Nombre no puede estar vacio",
        customError:"Se admiten solo letras entre 3 y 50 caracteres máximo"
    },
    email:{
        valueMissing: "El campo Correo no puede estar vacio",
        customError: "El correo no es valido",
    },
    message:{
        valueMissing: "Escribe un breve mensaje",
        customError:"Se permiten de 4 a 300 caracteres maximo",
    },
};

$inputs.forEach(input => {
    input.addEventListener("blur",validForm);
});

const validity = {
    name: false,
    email: false,
    message: false,
}

const activeButton = ()=>{
    let valid = Object.values(validity);
    let checkValidity = (()=>valid.every(input => input === true))();
    checkValidity ? $submit.removeAttribute("disabled") : $submit.setAttribute("disabled","");
};

activeButton();

function validForm(event){
    let input = event.target;
    let input_type = input.dataset?.type;
    let expression = expreg[input_type];
    let $parent = input.parentNode;
    let $alert = $parent.querySelector(".input-alert");
    if (input.value == "") {
        $alert.innerHTML = messagesError[input_type].valueMissing;
        $alert.classList.add("input-alert--active");
        validity[input_type]=false;
    }else
    if (expression.test(input.value)){
        $alert.innerHTML = messagesError[input_type].valueMissing;
        $alert.classList.remove("input-alert--active");
        validity[input_type]=true;

    } else {
        $alert.innerHTML = messagesError[input_type].customError;
        $alert.classList.add("input-alert--active");
        validity[input_type]=false;

    }
    activeButton();
}