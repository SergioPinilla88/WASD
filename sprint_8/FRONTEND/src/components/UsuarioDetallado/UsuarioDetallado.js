import React, {Component} from 'react';
import '../../components/UsuarioDetallado/UsuarioDetallado.css';


class UsuarioDetallado extends Component{

    constructor(props){

        super(props)

        this.state = {

            ultimoUsuario: {},
                
        }

    }

    componentDidMount(){

        fetch('/API/usuarios') 
        .then(respuesta => {
           
            return respuesta.json()
            
        })
        .then(fullUsuarios => {
            
            
            this.setState({ultimoUsuario: fullUsuarios.data.users.pop()});
            

        })
        .catch(e => console.log(e));


    }

    render(){

        return(
            <React.Fragment>
                <div className="tarjetaUsuarioDetallado">

                    <div className="tituloUsuarioDetallado">

                        Ultimo usuario agregado

                    </div>

                    <div className="detalleUsuarioDetalladoMain">
                      
                        {this.state.ultimoUsuario.nombre}
                
                    </div>

                    <div className="detalleUsuarioDetalladoMain">
                      
                        {this.state.ultimoUsuario.apellido}
                
                    </div>

                    <hr className="divisorUsuarioDetallado"/>

                    <div>
                
                   
                        <img className="imagenUsuarioDetallado" src={this.state.ultimoUsuario.avatar} />
                        {/*  {props.image} */}

                
                    </div>

                    <hr className="divisorUsuarioDetallado"/>
                

                    <div className="detalleUsuarioDetalladoSec">
                   
                        {this.state.ultimoUsuario.email}                 
                      
                
                    </div>

                    
                </div>
              
        </React.Fragment>
        )

    }   
    
}
export default UsuarioDetallado;