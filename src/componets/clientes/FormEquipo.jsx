import React,{Fragment,useState,useEffect} from 'react'

import Error from '../layout/Error'

const FormRegitroEquipo = ({cliente, equipo, guardarNuevoCliente, guardarCliente, guardarEquipo}) => {

    

    const [error, guardarError] = useState(false)
    // const [error, guardarError] = useState(false)
    const [cic, guardarCi] = useState('')

    // const { nombre, apellido ,correo, telefono, ci } = cliente;

    const { tipo, detalle ,fechaingreso, fechasalida,garantia } = equipo;

    const [cicliente, guardarCiCliente] = useState(false)



    useEffect(() => {
        
    }, [])

    const onChange = e =>{
        guardarCi(e.target.value)
    }
    const onChangeEquipo = e => {       
        guardarEquipo({
            ...equipo,
            [e.target.name]:e.target.value
        })
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();

        //Validar Formulario
        if(cic.trim() === ''){
            guardarError(true)
            return
        }
        guardarError(false)

        //Realizar consulta
        
        const API = await fetch(`http://localhost:4000/api/verificarCliente/${cic}`);
        const respuesta = await API.json();
        if (respuesta.length === 0) {
            guardarNuevoCliente(true)
            guardarCliente({
                id: null,
                nombre: '',
                apellido: '',
                correo: '',
                telefono: '',
                ci: ''
            })
            return
        }
        guardarNuevoCliente(false)
        guardarCliente(respuesta[0])
        guardarCiCliente(true);

        
    }
    const onSubmitE = (e)=>{
        e.preventDefault()

        if(tipo === '' || detalle === '' || garantia === '' ){
            guardarError(true)
            return
        }
        guardarError(false)

        const url = `http://localhost:4000/api/registrarElectrodomestico`
        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        
        const data = {};
        data.tipo = tipo
        data.detalleproblema = detalle
        data.fechaingreso = fecha
        data.fechasalida = fecha
        data.ci = cic;
        
        let JSO = JSON.stringify(data)
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('electrodomenstico insertado correctamente'));

        guardarEquipo({
            tipo: '',
            detalle: '',
            fechaingreso: '',
            fechasalida: '',
            garantia:''
        })

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
                <button type="submit" className="btn btn-success">buscar</button>
            </form>
            {cicliente
                ?
                    <form onSubmit={onSubmitE} >
                        <h2>Regitrar Electromestico</h2>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="tipo"><i className="material-icons">contact_mail</i> Tipo de Electromestico</label>
                                <select name="tipo" id="tipo" value={tipo} onChange={onChangeEquipo}  className="form-control">
                                    <option defaultValue="" disabled>Seleccione la opcion...</option>
                                    <option value="LAVADORA" >Lavadora</option>
                                    <option value="REFRIGERADOR" >Refrigerador</option>
                                    <option value="MICROONDAS" >Microondas</option>

                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="garantia"><i className="material-icons">contact_mail</i> Garantia</label>
                                <select name="garantia" id="garantia" value={garantia} onChange={onChangeEquipo} className="form-control">
                                    <option defaultValue="" disabled>Seleccione la opcion...</option>
                                    <option value="V" >Con garantia</option>
                                    <option value="F" >No tiene garantia</option>
                                </select>
                            </div>
                            <div className="form-group col-md-8">
                                <label htmlFor="detalle"><i className="material-icons">contact_mail</i> Problemas</label>
                                <textarea name="detalle" id="detalle" value={detalle} onChange={onChangeEquipo}  className="form-control" cols="5" rows="3"></textarea>
                            </div>
                            
                        </div>
                        <button type="submit" className="btn btn-success">Registrar Equipo</button>
                    </form>
                :null
            }
        </Fragment>
     );
}
 
export default FormRegitroEquipo;