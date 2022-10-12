import React from 'react';
import '../../components/NuevosReg/NuevosReg.css';
import ProductoDetallado from '../ProductoDetallado/ProductoDetallado';
import UsuarioDetallado from '../UsuarioDetallado/UsuarioDetallado';



function NuevosReg(props){
    return(
        <React.Fragment>

            <div className="nuevosRegMain">

                <h1 className="tituloUltimosRegistros">
            
                    Ultimos Registros

                </h1>

                <div className="nuevosRegSec">
            
                    <ProductoDetallado />
                    <UsuarioDetallado />
                </div>
            
            </div>
            
        </React.Fragment>
    )
}
export default NuevosReg;