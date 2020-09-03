import React from 'react'

import {Link} from 'react-router-dom'

const Tarea = ({tarea}) => {
    debugger
    return (
        <div className="card sombra">
            <div className="card-header">
            </div>
            <div className="card-body">
                <p><b>Tipo: </b> {tarea.tipo}</p>
                <p><b>Cliente: </b> {tarea.cliente}</p>
                {tarea.estado === 'evaluacion'
                    ?<p className="evaluacion"><b>Estado: </b> {tarea.estado}</p>
                    :tarea.estado === 'reparacion'
                    ?<p className="reparacion"><b>Estado: </b> {tarea.estado}</p>
                    :<p className="terminado"><b>Estado: </b> {tarea.estado}</p>
                }           
                <p><b>Precio: </b> {tarea.precio} Bs.</p>
                <p><b>Telefono: </b> {tarea.telefono}</p>
                <p><b>Correo: </b> {tarea.correo}</p>

            </div>
            <div className="card-footer">
                <Link to={`/detalle-electrodomestico/${tarea.id}/${tarea.idreparacion}`} className="btn btn-info" >Ver detalle</Link>
            </div>
        </div> 
     );
}
 
export default Tarea;