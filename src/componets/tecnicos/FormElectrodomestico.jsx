import React,{Fragment, useState} from 'react'
import Error from '../layout/Error'

import Tarea from './Tarea'

const Electrodomesticos = () => {

    const [ tareas, guardarTareas] = useState([])

    const [error, guardarError] = useState(false)

    const [ci, guardarCi] = useState('')

    const onSubmit = async (e) =>{
        e.preventDefault()

        if(ci.trim()===''){
            guardarError(true)
            return
        }
        guardarError(false)

        const API = await fetch(`http://localhost:4000/api/traerListaTareas/${ci}`)
        const respuesta = await API.json()
        guardarTareas(respuesta)
    }
    const onChange = e =>{
        e.preventDefault()

        guardarCi(e.target.value)
    }
    return (
        <Fragment>
            
            <form onSubmit={onSubmit} >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <h2>Lista de Tareas</h2>
                        <label htmlFor="ci"><i className="material-icons">account_circle</i>Ci</label>
                        <input type="text" className="form-control" id="ci" name="ci" value={ci} onChange={onChange}/>
                        <button type="submit" className="btn btn-info">buscar</button>
                    </div> 
                    <div className="form-group col-md-8">
                        <h2>Lista de Tareas</h2>
                        <div className="containerTareas">
                            {tareas.length === 0
                                ?null
                                :tareas.map( tarea => {
                                    return <Tarea key={tarea.id} tarea={tarea} />
                                })
                            }

                        </div>
                    </div> 
                </div>
                
                {error
                    ? <Error mensaje="coloque un carnet valido"/>
                    : null
                }
            </form>
            

        </Fragment>
     );
}
 
export default Electrodomesticos;