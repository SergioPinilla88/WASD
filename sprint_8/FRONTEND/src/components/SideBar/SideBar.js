import React from 'react';
import '../../components/SideBar/SideBar.css';
import mainLogo from '../../assets/images/Logo.png';
import {Link} from 'react-router-dom';



function SideBar(props){
    return(
        <React.Fragment>

            <div className = "bloquePrincipalSideBar">

                <hr />
                <hr />
                <div>
                
                   
                    <img className="imagenLogoSideBar" src={mainLogo} />                   

        
                </div>

                <hr />
                <hr />




                <hr className="divisorSideBarWide"/>


                <ul className="titulosMenuSideBar">

                    

                    <li>
                       <Link to="/"> Página Principal </Link>
                    </li>

                    <hr className="divisorSideBar"/>

                    <li>
                    <Link to="/TotalMainEntidades">Totalizado entidades principales </Link>
                    </li>

                    <hr className="divisorSideBar"/>

                    <li>
                    <Link to="/UltimoRegistro"> Ultimos registros añadidos </Link>
                    </li>

                    <hr className="divisorSideBar"/>

                    <li>
                    <Link to="/TotalCategorias"> Totalizado por categorias </Link>
                    </li>

                    <hr className="divisorSideBar"/>

                    <li>
                    <Link to="/TodosProductos"> Todos los productos por categoria </Link> 
                    </li>

                </ul>

                <hr className="divisorSideBarWide"/>

            </div>
            
            
        </React.Fragment>
    )
}
export default SideBar;