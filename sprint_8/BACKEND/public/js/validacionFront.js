window.addEventListener("load", function(){
    let formulario = document.querySelector("form#formLogin")
    let email = document.querySelector("#correo");
    let emailError = document.querySelector("#emailError")
    let password = document.querySelector("#pwd");
    let passwordError = document.querySelector("#passwordError")
    let button = document.querySelector("#submit")
    button.addEventListener("click", function(e){

        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
        let regexPassword =  new RegExp("^(((?=.[a-z])(?=.[A-Z]))|((?=.[a-z])(?=.[0-9]))|((?=.[A-Z])(?=.[0-9])))(?=.{6,})");
        let errores = {};
        if(email.value == "" ){
            errores.email= "El campo email tiene que estar completo";
        }else if(!regexEmail.test(email.value)){
            errores.email = "No es un correo valido";
        }

        if(password.value.length <= 8 ){
            errores.password = "El campo contraseña requiere un minimo de 8 caracteres"
        }
        if (Object.keys(errores).length > 0 ){
            e.preventDefault();
            emailError.innerHTML = (errores.email) ? errores.email : '';
            passwordError.innerHTML = (errores.password) ? errores.password : '';
        }else{
            formulario.submit();
        }
})
})
