import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import ContentRowTop from './ContentRowTop';
import Movie from './Movie';
import Footer from './Footer';
function Frame(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    
                    <SideBar />
                    <TopBar />
                
                </div>
            </div>    
        </React.Fragment>
    )
}
export default Frame;