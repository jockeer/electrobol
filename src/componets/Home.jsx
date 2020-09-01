import React from 'react'

import SideBar from './layout/SideBar'
import Barra from './layout/Barra'

const Home = () => {
    
    return ( 
        <div className="contenedor-app">
            <SideBar/>
            <div className="seccion-principal">
                <Barra mensaje="Bienvenido Administrador"/>               
                <main>
                    <div className="container">
                        <h2>Estadisticas</h2>
                        <div className="main-home">
                            <div className="card">
                                <div className="card-body"></div>
                            </div>
                            <div className="card">
                                <div className="card-body"></div>
                            </div>
                            <div className="card">
                                <div className="card-body"></div>
                            </div>
                            <div className="card">
                                <div className="card-body"></div>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Home;