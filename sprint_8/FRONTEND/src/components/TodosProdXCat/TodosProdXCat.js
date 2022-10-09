import React from 'react';
import '../../components/TodosProdXCat/TodosProdXCat.css';
import '../../components/TodasCategoriasProductosDB/TodasCategoriasProductosDB'
import TodasCategoriasProductosDB from '../../components/TodasCategoriasProductosDB/TodasCategoriasProductosDB';



function TodosProdXCat(props){
    return(
        <React.Fragment>
           
            <div className= "tarjetaGroupCatXProd">

                <h1 className="tituloGroupCatXProd">
            
                    Todos los productos por categoria

                </h1>

                

                    <TodasCategoriasProductosDB />

                


            </div>
            
            
        </React.Fragment>
    )
}
export default TodosProdXCat;