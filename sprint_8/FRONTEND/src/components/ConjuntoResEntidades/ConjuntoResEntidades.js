import React from 'react';
import ResEntidad from '../../components/ResEntidad/ResEntidad';
import '../../components/ConjuntoResEntidades/ConjuntoResEntidades.css';

function ConjuntoResEntidades(props){
   
    
   
    return(
        <React.Fragment>

            <div className="tarjetaConjuntoEntidades">
            <h1 className="tituloConjuntoEntidades">
            
                Resumen entidades principales

            </h1>
      
            <div className="cintaEntidades">

            
               {                      props.entidades.map((ent,index)=>{
                                            return  <ResEntidad  {...ent}  key={index} />
                                        }) 
                    
                                    }            


            </div>

            </div>
        </React.Fragment>
    )
}
export default ConjuntoResEntidades;