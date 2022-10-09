import React, {Component} from 'react';
import Producto from '../Producto/Producto';
import Categoria from '../Categoria/Categoria';
import './TodasCategoriasProductosDB.css';


class TodasCategoriasProductosDB extends Component{


    constructor(props){

        super(props)

        this.state = {

            totalProductos: 0,
            resumenCategorias: [],
            detalleProductos: [],
            categoriasProd: []
        }

    }

    componentDidMount(){

        fetch('/API/productos/detalleProductos/total')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(fullCategorias => {
            console.log(fullCategorias);

            let agrupadoCategorias = [];
            for(let i = 0; i < fullCategorias.data.countByCategory.length; i++){

                let categoriaProductos = {

                    categoriaDesc: fullCategorias.data.countByCategory[i],
                    productosCat: [] 

                }

                for(let j = 0; j < fullCategorias.data.products.length; j++){

                    if(fullCategorias.data.countByCategory[i].nombre == fullCategorias.data.products[j].categoria){

                        categoriaProductos.productosCat.push(fullCategorias.data.products[j]);

                    }

                }
                agrupadoCategorias.push(categoriaProductos);
                
            }

            this.setState({totalProductos: fullCategorias.data.count});
            this.setState({resumenCategorias: fullCategorias.data.countByCategory});
            this.setState({detalleProductos: fullCategorias.data.products});
            this.setState({categoriasProd: agrupadoCategorias});

        })
        .catch(e => console.log(e));


    }

    render(){

        return(
            <React.Fragment>

{
                                        this.state.categoriasProd.map((categorias,index)=>{
                                            return  <Categoria  {...categorias}  key={index} />
                                        })
                    }



               {/*     {
                                        this.state.detalleProductos.map((producto,index)=>{
                                            return  <Producto  {...producto}  key={index} />
                                        })
                    }  */}


            </React.Fragment>

        )

    }



}

export default TodasCategoriasProductosDB;