import React from 'react';
import '../../components/ResEntidad/ResEntidad.css';



function ResEntidad(props){
    return(
        <React.Fragment>
            <div className="tarjetaEntidad">

                <div className="detalleEntidadMain">
                      
                      {props.nombre}
                 
                 </div>

                 <hr className="divisorEntidad"/>

                 <div className="detalleEntidadSec">
                   

                    Total Registros: {props.totalItems}                 
               
                </div>

            </div>




            
            
        </React.Fragment>
    )
}
export default ResEntidad;