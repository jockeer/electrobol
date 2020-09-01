import React,{Fragment,useState,useEffect} from 'react'

import Error from '../layout/Error'

const FormRegitroEquipo = ({cliente, guardarNuevoCliente, guardarCliente}) => {

    

    const [error, guardarError] = useState(false)
    // const [error, guardarError] = useState(false)
    const [ci, guardarCi] = useState('')



    useEffect(() => {
        
    }, [])

    const onChange = e =>{
        guardarCi(e.target.value)
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();

        //Validar Formulario
        if(ci.trim() === ''){
            guardarError(true)
            return
        }
        guardarError(false)

        //Realizar consulta
        
        const API = await fetch(`http://localhost:4000/api/verificarCliente/${ci}`);
        const respuesta = await API.json();
        if (respuesta.length === 0) {
            guardarNuevoCliente(true)
        }
        console.log(respuesta)
        
    }

    return ( 
        <Fragment>
            <h2>Cliente</h2>
            <form onSubmit={onSubmit} >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="ci"><i className="material-icons">account_circle</i>Ci</label>
                        <input type="text" className="form-control" id="ci" name="ci" onChange={onChange}/>
                    </div> 
                </div>
                
                {error
                    ? <Error mensaje="coloque un carnet valido"/>
                    : null
                }
                <button type="submit" className="btn btn-primary">buscar</button>
            </form>
        </Fragment>
     );
}
 
export default FormRegitroEquipo;