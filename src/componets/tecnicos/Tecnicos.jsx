import React from 'react';
import SideBar from '../layout/SideBar'
import Barra from '../layout/Barra'
import FormRegistroTecnicos from './FormRegistro';
import FormElectrodomestico from './FormElectrodomestico'

const Tecnicos = () => {
    return ( 
        <div className="contenedor-app">
            <SideBar/>
            <div className="seccion-principal">
                <Barra mensaje="Tecnicos"/>             
                <main>
                    <div className="container">
                        <h2>Tecnicos</h2>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Registro de Tecnicos</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Trabajo Asignado</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                            </li>
                        </ul>
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">
                                <FormRegistroTecnicos />
                            </div>
                            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <FormElectrodomestico />
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">prueba3</div>
                            </div>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Tecnicos;