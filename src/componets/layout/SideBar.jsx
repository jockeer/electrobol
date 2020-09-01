import React from 'react';
import { Link } from 'react-router-dom'


const SideBar = () => {

    return ( 
        <aside>
            <h1>ELECTROBOL <span>Administracion</span></h1>
            <h2>Opciones</h2>
            <ul>
                <li className="opcionMenu">
                    <Link to='/home' className="opcion"><i className="material-icons">home</i>  Home</Link>
                </li>
                <li className="opcionMenu">
                    <Link to='/reparaciones' className="opcion"><i className="material-icons">build</i> Reparaciones</Link>
                </li>
                <li className="opcionMenu">
                    <Link to='/tecnicos' className="opcion"><i className="material-icons">face</i> Tecnicos</Link>
                </li>
                <li className="opcionMenu">
                    <Link to='/reportes' className="opcion"><i className="material-icons">library_books</i> Reportes</Link>
                </li>
                <li className="opcionMenu">
                    <Link to='/' className="opcion"><i className="material-icons">arrow_back</i> Salir</Link>
                </li>
                
            </ul>
        </aside>
     );
}
 
export default SideBar;