const nameField = document.querySelector("[name = nombre]");
const lastNameField = document.querySelector("[name = apellido]");
const emailField = document.querySelector("[name = correo]");
const passwordField = document.querySelector("[name = pwd]");
const repasswordField = document.querySelector("[name = pwdConf]");
const imageField = document.querySelector("[name = avatar]");


const errores = (message, field, isError = true) => {
    if(isError){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("warnings");
        field.nextElementSibling.innerText = message;
    }else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("warnings");
        field.nextElementSibling.innerText = "";
    }
}

const validarCampos = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if(fieldValue.trim().length === 0) {
        errores(message,field);
    }else if(fieldValue.trim().length< 2) {
        errores(` ${field.name} debe tener al menos 2 caracteres`,field);
    }else {
        errores("",field, false);
    }
}
   
const validarEmail = (e) =>{
    const field = e.target;
    const fieldValue = e.target.value;
    let regexEmail = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
    if(fieldValue.trim().length > 5 && !regexEmail.test(fieldValue) ){
        errores("Por Favor Ingrese un correo valido",field);
    }else {
        errores("",field,false);
    }
} 
const validarPassword = (message,e) =>{
    const field = e.target;
    const fieldValue = e.target.value;
    let regexPassword =  new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if(fieldValue.trim().length === 0){
        errores(message,field);
    }else if(fieldValue.trim().length <= 8 ){
        errores(`El campo ${field.name} debe tener almenos 8 caracteres`,field);
    }else if(!regexPassword.test(fieldValue)){
        errores(`El campo ${field.name} deberá tener letras mayúsculas, minúsculas, un número y un carácter especial`,field);
    }else {
        errores("",field,false);
    }
} 

nameField.addEventListener("blur",(e)=> validarCampos("El campo nombre debe estar completo",e));
lastNameField.addEventListener("blur",(e)=> validarCampos("El campo apellido debe estar completo", e));
emailField.addEventListener("blur", (e)=> validarCampos("El campo correo debe estar completo", e));
passwordField.addEventListener("blur", (e)=> validarPassword("El campo contraseña debe estar completo", e));
repasswordField.addEventListener("blur", (e)=> validarPassword("El campo confirmar contraseña debe estar completo", e));

emailField.addEventListener("input",  validarEmail);

imageField.addEventListener("change", (e)=>{
    const field = e.target;
    const extension = e.target.files[0].name.split(".").pop().toLowerCase();
    const extValidos = ["jpg", "jpeg", "png", "gif"];
    if(!extValidos.includes(extension)){
        errores("Por Favor Ingrese un formato valido(jpg, jpeg , gif , png , gif)",field);
    }else {
        errores("",field,false);
    }
});