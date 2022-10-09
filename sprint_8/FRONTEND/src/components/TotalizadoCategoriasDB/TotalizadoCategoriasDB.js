import React, {Component} from 'react';
import ConjuntoResCategorias from '../ConjuntoResCategorias/ConjuntoResCategorias';
import './TotalizadoCategoriasDB.css';


class TotalizadoCategoriasDB extends Component{


    constructor(props){

        super(props)

        this.state = {

            totalProductos: 0,
            resumenCategorias: []
           
        }

    }

    componentDidMount(){

        fetch('/API/productos/detalleProductos/total')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(fullCategorias => {
      
            this.setState({resumenCategorias: fullCategorias.data.countByCategory});
            

        })
        .catch(e => console.log(e));


    }

    render(){

        return(
            <React.Fragment>


                                       
                              <ConjuntoResCategorias  categorias = {this.state.resumenCategorias}  />
                                        
                    



               {/*     {
                                        this.state.detalleProductos.map((producto,index)=>{
                                            return  <Producto  {...producto}  key={index} />
                                        })
                    }  */}


            </React.Fragment>

        )

    }



}

export default TotalizadoCategoriasDB;