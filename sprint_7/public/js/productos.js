window.addEventListener('load', function(){
  // copia y pega el codigo de la etapa 1 aca 
  let productos = document.querySelector('#productos');
  let buttonProductos = document.querySelector('#botonProducto');
  let name = document.querySelector('#name');
  let nameError = document.querySelector('#nameError');
  let descripcion = document.querySelector('#descripcion');
  let descripcionError = document.querySelector('#descripcionError');
  let fabricante = document.querySelector('#fabricante');
  let fabricanteError = document.querySelector('#fabricanteError');
  let paisOrigen = document.querySelector('#paisOrigen');
  let paisOrigenError = document.querySelector('#paisOrigenError');
  let modelo = document.querySelector('#modelo');
  let modeloError = document.querySelector('#modeloError');
  let funcionalidad = document.querySelector('#funcionalidad');
  let funcionalidadError = document.querySelector('#funcionalidadError');
  let image = document.querySelector('#image');
  let imageError = document.querySelector('#imageError');
  let peso = document.querySelector('#peso');
  let pesoError = document.querySelector('#pesoError');
  let calificacion = document.querySelector('#calificacion');
  let calificacionError = document.querySelector('#calificacionError');
  let price = document.querySelector('#price');
  let priceError = document.querySelector('#priceError');
  let quantity = document.querySelector('#quantity');
  let quantityError = document.querySelector('#quantityError');

  // desarrolla tu codigo aca 
  buttonProductos.addEventListener('click', function(e){
      
      let errores = {};
      let extension = /(.jpg|.jpeg|.png|.gif)$/i;
      
      //Nombre
      if(name.value.length == "" ){
          errores.name = "El campo nombre debe estar completo";
      }else if(name.value.length < 2){
          errores.name = "El campo nombre debe tener al menos 2 caracteres";
      };

      //Descripcion
      if(descripcion.value.length == "" ){
        errores.descripcion = "El campo descripcion debe estar completo";
      }else if(descripcion.value.length <30){
        errores.descripcion = "El campo descripcion debe tener al menos 30 caracteres";
      };

      //Fabricante
      // if(fabricante.value.length == "" ){
      //   errores.fabricante = "El campo fabricante debe estar completo";
      // }else if(fabricante.value.length < 2){
      //   errores.fabricante = "El campo fabricante debe tener al menos 2 caracteres";
      // };

      //PaisOrigen
      // if(paisOrigen.value.length == "" ){
      //   errores.paisOrigen = "El campo paisOrigen debe estar completo";
      // }else if(paisOrigen.value.length < 2){
      //   errores.paisOrigen = "El campo nombre debe tener al menos 2 caracteres";
      // };

      //Modelo
      if(modelo.value.length == "" ){
        errores.modelo = "Si no conoce el modelo, ingrese: Desconocido ";
      };

      //Funcionalidad
      if(funcionalidad.value.length == "" ){
        errores.funcionalidad = "El campo funcionalidad debe estar completo";
      }else if(funcionalidad.value.length < 2){
        errores.funcionalidad = "El campo funcionalidad debe tener al menos 3 caracteres";
      };

      //Imagen
      // if(image.value == null ){
      //   errores.image = "Seleccione una imagen";
      // };

      //Peso
      // if(peso.value == null ){
      //   errores.peso = "El campo peso debe estar completo";
      // }else if(peso.value ){
      //   errores.peso = "El campo peso debe tener al menos 2 caracteres";
      // };

      //Calificacion
      if(calificacion.value.length == "" ){
        errores.calificacion = "El campo calificacion debe estar completo";
      }else if(calificacion.value.length < 1 && calificacion.value.length < 6){
        errores.calificacion = "El campo calificacion debe tener una calificacion entre 1 y 5";
      };

      //Precio
      if(price.value.length == "" ){
        errores.price = "El campo precio debe estar completo";
      }else if(price.value.length < 1){
        errores.price = "El campo precio debe tener al menos 1 caracter";
      };

      //Cantidad
      if(quantity.value.length == "" ){
        errores.quantity = "El campo cantidad debe estar completo";
      }else if(quantity.value.length < 1){
        errores.quantity = "El campo cantidad debe tener al menos 1 caracteres";
      };

      if(Object.keys(errores).length > 0 ){

          e.preventDefault();
          
          nameError.innerHTML = (errores.name) ? errores.name : '';
          descripcionError.innerHTML = (errores.descripcion)? errores.descripcion : '';
          fabricanteError.innerHTML = (errores.fabricante) ? errores.fabricante : '';
          paisOrigenError.innerHTML = (errores.paisOrigen) ? errores.paisOrigen : '';
          modeloError.innerHTML = (errores.modelo)? errores.modelo : '';
          funcionalidadError.innerHTML= (errores.funcionalidad)? errores.funcionalidad : '';
          imageError.innerHTML= (errores.image)? errores.image : '';
          categoriaError.innerHTML= (errores.categoria)? errores.categoria : '';
          pesoError.innerHTML= (errores.peso)? errores.peso : '';
          calificacionError.innerHTML= (errores.calificacion)? errores.calificacion : '';
          priceError.innerHTML= (errores.price)? errores.price : '';
          quantityError.innerHTML= (errores.quantity)? errores.quantity : '';
      }else{
        productos.submit();
      }
     
  });

});