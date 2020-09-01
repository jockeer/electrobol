import React from 'react'
import SideBar from '../layout/SideBar'
import Barra from '../layout/Barra'
const Reportes = () => {
    return ( 
        <div className="contenedor-app">
            <SideBar/>
            <div className="seccion-principal">
                <Barra mensaje="Reportes"/>             
                <main>
                    
                </main>
            </div>
        </div>
     );
}
 
export default Reportes;