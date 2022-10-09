import React from 'react';
import '../../components/ResCategoria/ResCategoria.css';



function ResCategoria(props){
    return(
        <React.Fragment>
            <div className="tarjetaResCategoria">

                <div className="detalleCategoriaMain">
                      
                      {props.nombre}
                 
                 </div>

                 <hr className="divisorCategoria"/>

                 <div className="detalleCategoriaSec">
                   

                    Total Productos: {props.totalItems}                 
               
                </div>

            </div>




            
            
        </React.Fragment>
    )
}
export default ResCategoria;