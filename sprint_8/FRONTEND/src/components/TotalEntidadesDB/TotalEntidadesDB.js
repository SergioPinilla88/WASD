import React, {Component} from 'react';
import Producto from '../Producto/Producto';
import ConjuntoResEntidades from '../ConjuntoResEntidades/ConjuntoResEntidades';
import './TotalEntidadesDB.css';


class TotalEntidadesDB extends Component{


    constructor(props){

        super(props)

        this.state = {

            
            resumenEntidades: []
            
        }

    }

    componentDidMount(){

        fetch('/API/productos/detalleProductos/total')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(fullCategorias => {
            console.log(fullCategorias);

            let entidades = [];
            
            let entidad = {

                nombre: "Total Categorias",
                totalItems: fullCategorias.data.countByCategory.length
            };

            entidades.push(entidad);

            entidad = {

                nombre: "Total Productos",
                totalItems: fullCategorias.data.count
            };

            entidades.push(entidad);

            this.setState({resumenEntidades: entidades});
            

            

        })
        .catch(e => console.log(e));

        fetch('/API/usuarios')
        .then(respuesta => {

            return respuesta.json();
        })
        .then(usuarios => {

            let entidad = {

                nombre: "Total Usuarios",
                totalItems: usuarios.data.count
            };

            let entidades = this.state.resumenEntidades;
            entidades.push(entidad);
            this.setState({resumenEntidades: entidades});


        })
        .catch(e => console.log(e));


    }

    render(){

        return(
            <React.Fragment>

                <ConjuntoResEntidades  entidades = {this.state.resumenEntidades}  />



               {/*     {
                                        this.state.detalleProductos.map((producto,index)=>{
                                            return  <Producto  {...producto}  key={index} />
                                        })
                    }  */}


            </React.Fragment>

        )

    }



}

export default TotalEntidadesDB;