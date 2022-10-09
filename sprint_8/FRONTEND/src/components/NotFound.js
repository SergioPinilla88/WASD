import React from 'react';
import image from '../assets/images/404.jpg';
import {Link} from 'react-router-dom';



function NotFound(){
    return(
        <React.Fragment>

                <h2>Error 404: Not found</h2>
           
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

              
            
        </React.Fragment>
    )
}
export default NotFound;