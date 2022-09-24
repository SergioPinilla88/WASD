window.addEventListener('load', function(){
    // copia y pega el codigo de la etapa 1 aca 
    let formulario = document.querySelector('#formulario');
    let button = document.querySelector('#botonesLogin');
    let nombre = document.querySelector('#nombre');
    let nombreError = document.querySelector('#nombreError');
    let apellido = document.querySelector('#apellido');
    let apellidoError = document.querySelector('#apellidoError');
    let correo = document.querySelector('#correo');
    let correoError = document.querySelector('#correoError');
    let password = document.querySelector('#pwd');
    let passwordError = document.querySelector('#passwordError');
    let repassword = document.querySelector('#pwdConf');
    let repasswordError = document.querySelector('#repasswordError');
    let avatar = document.querySelector('#avatar');
    let avatarError = document.querySelector('#avatarError');

    // desarrolla tu codigo aca 
    button.addEventListener('click', function(e){
        
        let errores = {};
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let regexPassword =  new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        let archivo = this.value;
        let extension = /(.jpg|.jpeg|.png|.gif)$/i;
        
        if(nombre.value.length == "" ){
            errores.nombre = "El campo nombre debe estar completo";
        }else if(nombre.value.length < 2){
            errores.nombre = "El campo nombre debe tener al menos 2 caracteres";
        }
        if(apellido.value.length == ""){
            errores.apellido = "El campo apellido debe estar completo";
        }else if(nombre.value.length < 2){
            errores.apellido = "El campo apellido debe tener al menos 2 caracteres";
        }

        if(correo.value.length == ""){
            errores.correo = "El campo correo debe estar completo";
        }else if(!regexEmail.test(correo.value)){
            errores.correo = "El correo ingresado no es valido";
        }else if (correo.value.length == correo.value.length){
            errores.correo = "Este correo ya esta en uso";
        }
        if(password.value.length == ""){
            errores.password= "El campo contraseña debe estar completo";
        }else if(password.value.length < 8 ){
            errores.password= "El campo contraseña debe tener almenos 8 caracteres";
        }else if(!regexPassword.test(password.value)){
            errores.password= "El campo contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial";
        }
        if(repassword.value.length == ""){
            errores.repassword= "El campo confirmar contraseña debe estar completo";
        }else if(repassword-value.length < 8 ){
            errores.repassword= "El campo confirmar contraseñadebe tener almenos 8 caracteres";
        }else if(!regexPassword.test(repassword.value)){
            errores.repassword= "El campo confirmar contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial";
        }
        
        
            


        if(Object.keys(errores).length > 0 ){
            e.preventDefault();
            
            nombreError.innerHTML = (errores.nombre) ? errores.nombre : '';
            apellidoError.innerHTML = (errores.apellido)? errores.apellido : '';
            correoError.innerHTML = (errores.correo) ? errores.correo : '';
            passwordError.innerHTML = (errores.password) ? errores.password : '';
            repasswordError.innerHTML = (errores.repassword)? errores.repassword : '';
            avatarError.innerHTML= (errores.avatar)? errores.avatar : '';
        }else{
            formulario.submit();
        }
       
    })

});