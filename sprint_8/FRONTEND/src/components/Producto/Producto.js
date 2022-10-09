import React from 'react';
import '../../components/Producto/Producto.css';


function Producto(props){
    return(
        <React.Fragment>
            <div className="tarjetaProducto">
                <div className="detalleProductoMain">
                      
                     {props.nombre}
                
                </div>

                <div>
                
                   
                    <img className="imagenProducto" src={props.imagen} alt=" Star Wars - Mandalorian "/>
                      {/*  {props.image} */}

                
                </div>

                <hr className="divisorProducto"/>

                

                <div className="detalleProductoSec">
                   
                    {props.descripcion}
                       
                       
                      
                
                </div>

                <hr className="divisorProducto"/>

                <div className="detalleProductoSec">
                    
                <a href={`${props.detalle}`}>Ver detalle</a>

                      
                
                </div>

            </div>
        </React.Fragment>
    )
}
export default Producto;