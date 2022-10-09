import React from 'react';
import ResCategoria from '../../components/ResCategoria/ResCategoria';
import '../../components/ConjuntoResCategorias/ConjuntoResCategorias.css';

function ConjuntoResCategorias(props){
   
    console.log("Vector propiedades: " + props);
   
    return(
        <React.Fragment>

            <div className="tarjetaConjuntoCategorias">
            <h1 className="tituloConjuntoCategorias">
            
                Totalizado Categorias

            </h1>
      
            <section className="cintaCategorias">

            
               {                      props.categorias.map((cat,index)=>{
                                            return  <ResCategoria  {...cat}  key={index} />
                                        }) 
                    
                                    }            


            </section>

            </div>
        </React.Fragment>
    )
}
export default ConjuntoResCategorias;