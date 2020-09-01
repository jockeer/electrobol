import React,{Fragment,useState,useEffect} from 'react'

import Error from '../layout/Error'

const FormRegistroTecnicos = () => {

    const [ tecnico, guardarTecnico ] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        ci: ''
    })

    const [error, guardarError] = useState(false)



    const { nombre, apellido ,correo, telefono, ci } = tecnico;

    useEffect(() => {
        
    }, [])

    const onChange = e => {
        guardarTecnico({
            ...tecnico,
            [e.target.name]:e.target.value
        })
    }
    
    const onSubmit = e => {
        e.preventDefault();

        //Validar Formulario
        if (nombre === '' || apellido === '' || correo === '' || telefono === '' || ci === '') {
            guardarError(true)
            return;
        }
        guardarError(false)
    }

    return ( 
        <Fragment>
            <h2>Regitrar Nuevo Personal</h2>
            <form onSubmit={onSubmit} >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="nombre"><i className="material-icons">account_circle</i> Nombres</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={onChange}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="apellido"><i className="material-icons">account_circle</i> Apellidos</label>
                        <input type="text" className="form-control" id="apellido" name="apellido" value={apellido} onChange={onChange}/>
                    </div>  
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="ci"><i className="material-icons">mood</i> Nro. de Carnet de Identidad</label>
                        <input type="text" className="form-control" id="ci" name="ci" value={ci} onChange={onChange}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="telefono"><i className="material-icons">contact_phone</i> Telefono</label>
                        <input type="text" className="form-control" id="telefono" name="telefono" value={telefono} onChange={onChange}/>
                    </div>
                </div>
                <div className="form-row">

                    <div className="form-group col-md-4">
                        <label htmlFor="correo"><i className="material-icons">contact_mail</i> Correo Electronico</label>
                        <input type="text" className="form-control" id="correo" name="correo" value={correo} onChange={onChange}/>
                    </div>
                </div>
                {error
                    ? <Error mensaje="Todos los campos deben estar llenos"/>
                    :null
                }
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </Fragment>
     );
}
 
export default FormRegistroTecnicos;