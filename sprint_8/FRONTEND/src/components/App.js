import React from 'react';
import ContentWrapper from './ContentWrapper';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import Movie from './Movie';
import '../assets/css/AppMain.css';
import Footer from './Footer';
import NotFound from './NotFound';
import TotalEntidadesDB from './TotalEntidadesDB/TotalEntidadesDB';
import TotalizadoCategoriasDB from './TotalizadoCategoriasDB/TotalizadoCategoriasDB';
import TodosProdXCat from './TodosProdXCat/TodosProdXCat';
import ProductoDetallado from './ProductoDetallado/ProductoDetallado';
import UsuarioDetallado from './UsuarioDetallado/UsuarioDetallado';
import SideBar from './SideBar/SideBar';
import ConglomeradoMain from './ConglomeradoMain/ConglomeradoMain';
import NuevosReg from './NuevosReg/NuevosReg';



function App() {
  return (

        <div className="principalConSidebar">

          <SideBar />


          <Routes>
              
              <Route path="/" element={<ConglomeradoMain />} />
              <Route path="/TotalMainEntidades" element={<TotalEntidadesDB/>} />
              <Route path="/UltimoRegistro" element={<NuevosReg />} />
              <Route path="/TotalCategorias" element={<TotalizadoCategoriasDB />} />
              <Route path="/TodosProductos" element={<TodosProdXCat />} />
              <Route path="*" element={<NotFound />} />
              
            </Routes>




          
    
    {/*
      	  <div className="divContenidoPrincipal">
          
            <TotalEntidadesDB/>
            <TotalizadoCategoriasDB />

            <div className = "UltimosRegistros">

            <ProductoDetallado />
            <UsuarioDetallado />
            </div>
            <TodosProdXCat />
          </div> 
          
  */}  
          {/* <TodasCategorias/> */}
          

          {/*
          
          <SideBar />
         
          

          

          <div className='divContenidoPrincipal'> 

          <TopBar />
          
           <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<ContentRowMovies />} />
              <Route path="/genres" element={<GenresInDb />} />
              <Route path="/AllMovies" element={<Movie />} />
              <Route path="*" element={<NotFound />} />
              
            </Routes>

          <Footer />

  

        </div>  */}
          
        </div>
    
  );
}

export default App;
