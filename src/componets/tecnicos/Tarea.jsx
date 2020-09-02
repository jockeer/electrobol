import React from 'react'

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
                    ?<p className="prueba"><b>Estado: </b> {tarea.estado}</p>
                    :null
                }           
                <p><b>Precio: </b> {tarea.precio} Bs.</p>
                <p><b>Telefono: </b> {tarea.telefono}</p>
                <p><b>Correo: </b> {tarea.correo}</p>

            </div>
        </div> 
     );
}
 
export default Tarea;