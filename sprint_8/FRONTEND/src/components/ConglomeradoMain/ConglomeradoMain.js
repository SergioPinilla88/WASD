import React from 'react';
import TotalEntidadesDB from '../../components/TotalEntidadesDB/TotalEntidadesDB';
import TotalizadoCategoriasDB from '../../components/TotalizadoCategoriasDB/TotalizadoCategoriasDB';
import TodosProdXCat from '../../components/TodosProdXCat/TodosProdXCat';
import ProductoDetallado from '../../components/ProductoDetallado/ProductoDetallado';
import UsuarioDetallado from '../../components/UsuarioDetallado/UsuarioDetallado';
import NuevosReg from '../NuevosReg/NuevosReg';
import '../../components/ConglomeradoMain/ConglomeradoMain.css';


function ConglomeradoMain(){
    return(
        <React.Fragment>

            <div className="divContenidoPrincipalConglomerado">
          
                <TotalEntidadesDB/>
                <TotalizadoCategoriasDB />
                <NuevosReg />
                <TodosProdXCat />
                </div> 
            
        </React.Fragment>
    )
}
export default ConglomeradoMain;