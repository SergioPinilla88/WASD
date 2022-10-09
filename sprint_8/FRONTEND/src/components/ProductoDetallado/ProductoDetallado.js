import React, {Component} from 'react';
import '../../components/ProductoDetallado/ProductoDetallado.css';


class ProductoDetallado extends Component{

    constructor(props){

        super(props)

        this.state = {

            ultimoProducto: {},
                
        }

    }

    componentDidMount(){

        fetch('/API/productos/detalleProductos/total')
        .then(respuesta => {
            console.log("Resp:" + respuesta);
            return respuesta.json()
            
        })
        .then(fullCategorias => {
            
            
            this.setState({ultimoProducto: fullCategorias.data.products.pop()});
            

        })
        .catch(e => console.log(e));


    }

    render(){

        return(
            <React.Fragment>
                <div className="tarjetaProductoDetallado">

                    <div className="tituloProductoDetallado">

                        Ultimo producto agregado

                    </div>

                    <div className="detalleProductoDetalladoMain">
                      
                        {this.state.ultimoProducto.nombre}
                
                    </div>

                    <div>
                
                   
                        <img className="imagenProductoDetallado" src={this.state.ultimoProducto.imagen} />
                        {/*  {props.image} */}

                
                    </div>

                    <hr className="divisorProductoDetallado"/>

                

                    <div className="detalleProductoDetalladoSec">
                   
                        {this.state.ultimoProducto.descripcion}                 
                      
                
                    </div>

                    <hr className="divisorProductoDetallado"/>


                    <div className="detalleProductoDetalladoSec">
                   
                  Categoria:  {this.state.ultimoProducto.categoria}                 
                 
           
               </div>

               <hr className="divisorProductoDetallado"/>


                    <div className="detalleProductoDetalladoSec">
                    
                        <a href={`${this.state.ultimoProducto.detalle}`}>Ver detalle</a>                      
                
                    </div>

                </div>
        </React.Fragment>
        )

    }   
    
}
export default ProductoDetallado;