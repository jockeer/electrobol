import React,{useState} from 'react'
import SideBar from '../layout/SideBar'
import Barra from '../layout/Barra'
import FormRegistroCliente from '../clientes/FormCliente'
import FormRegistroEquipo from '../clientes/FormEquipo'
const Reparaciones = () => {

    const [ nuevocliente, guardarNuevoCliente] = useState(false)

    const [ cliente, guardarCliente ] = useState({
        id: null,
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        ci: ''
    })
    const [ equipo, guardarEquipo ] = useState({
        tipo: '',
        detalle: '',
        fechaingreso: '',
        fechasalida: '',
        garantia:''
    })

    return ( 
        <div className="contenedor-app">
            <SideBar/>
            <div className="seccion-principal">
                <Barra mensaje="Reparaciones"/>             
                <main>
                    <div className="container">
                        <h2>Gestion de Reparaciones</h2>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Registro de Clientes</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Asignar Reparacion</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                            </li>
                        </ul>
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                {nuevocliente
                                    ?<FormRegistroCliente equipo={equipo} cliente={cliente} guardarNuevoCliente={guardarNuevoCliente} guardarEquipo={guardarEquipo} guardarCliente={guardarCliente}/>
                                    :<FormRegistroEquipo equipo={equipo} cliente={cliente} guardarEquipo={guardarEquipo} guardarNuevoCliente={guardarNuevoCliente} guardarCliente={guardarCliente}/>
                                }
                                
                                
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">prueba3</div>
                            </div>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Reparaciones;