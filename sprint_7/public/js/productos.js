window.addEventListener('load', function() {
    let button = document.querySelector('form.productos');
    button.addEventListener('submit', function(e) {

      let nombre = document.querySelector("#name");
      if(nombre.value.length > 3 ){
        
      }else if(nombre.value.length < 3){
        e.preventDefault();
      };

      let descripcion = document.querySelector("#descripcion");
      if( descripcion.value.length < 4){
        console.log('Hubo un error en el descripcion');
      };

      let fabricante = document.querySelector("#fabricante");
      if( fabricante.value.length < 4){
        console.log('Hubo un error en el fabricante');
      };
      
      let paisOrigen = document.querySelector("#paisOrigen");
      if( paisOrigen.value.length < 4){
        console.log('Hubo un error en el paisOrigen');
      };

      let modelo = document.querySelector("#modelo");
      if( modelo.value.length < 4){
        console.log('Hubo un error en el modelo');
      };
      let funcionalidad = document.querySelector("#funcionalidad");
      if( funcionalidad.value.length < 4){
        console.log('Hubo un error en el funcionalidad');
      };
  
    })
  });