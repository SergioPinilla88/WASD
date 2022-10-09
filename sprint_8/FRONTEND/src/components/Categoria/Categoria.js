import React from 'react';
import Producto from '../../components/Producto/Producto';
import '../../components/Categoria/Categoria.css';

function Categoria(props){
   
    console.log("Vector propiepdades: " + props);
   
    return(
        <React.Fragment>

            <div className="tarjetaCategoria">
                <h1 className="tituloCategoria">
                    {props.categoriaDesc.nombre}

                </h1>
      
                <section className="cintaProductos">

            
                 {                      props.productosCat.map((prod,index)=>{
                                            return  <Producto  {...prod}  key={index} />
                                        }) 
                    
                                    }            


                </section>

            </div>
        </React.Fragment>
    )
}
export default Categoria;