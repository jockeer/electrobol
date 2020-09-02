import React,{Fragment,useState,useEffect} from 'react'

import Error from '../layout/Error'

const FormRegistroCliente = ({equipo, cliente, guardarCliente,guardarNuevoCliente, guardarEquipo}) => {

    

    const [error, guardarError] = useState(false)

    const { nombre, apellido ,correo, telefono, ci } = cliente;
    const { tipo, detalle ,fechaingreso, fechasalida,garantia } = equipo;

    

    const onChange = e => {
        guardarCliente({
            ...cliente,
            [e.target.name]:e.target.value
        })
    }
    const onChangeEquipo = e => {       
        guardarEquipo({
            ...equipo,
            [e.target.name]:e.target.value
        })
    }
    const registrarCliente = () =>{
        const url = `http://localhost:4000/api/registrarCliente`

        const data = {};
        data.nombre = nombre
        data.apellido = apellido
        data.correo = correo
        data.telefono = telefono
        data.ci = ci;
        
        let JSO = JSON.stringify(data)
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('cliente insertado correctamente'));
    }
    const registrarElectrodomestico = () =>{
        const url = `http://localhost:4000/api/registrarElectrodomestico`
        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        
        const data = {};
        data.tipo = tipo
        data.detalleproblema = detalle
        data.fechaingreso = fecha
        data.fechasalida = fecha
        data.ci = ci;
        
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
    }
    const onSubmit = async (e) => {
        e.preventDefault();

        //Validar Formulario
        if (nombre === '' || apellido === '' || correo === '' || telefono === '' || ci === ''|| tipo === '' || detalle === '' || garantia === '') {
            guardarError(true)
            return;
        }
        guardarError(false)

        //insercion ala APIS
        await registrarCliente()
        await registrarElectrodomestico()
        guardarCliente({
            id: null,
            nombre: '',
            apellido: '',
            correo: '',
            telefono: '',
            ci: ''
        })
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
            <h2><i className="material-icons" onClick={() => guardarNuevoCliente(false)}>arrow_back</i> Regitrar Nuevo Cliente</h2>
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
                    <div className="form-group col-md-4">
                        <label htmlFor="garantia"><i className="material-icons">contact_mail</i> Garantia</label>
                        <select name="garantia" id="garantia" value={garantia} onChange={onChangeEquipo} className="form-control">
                            <option defaultValue="" disabled>Seleccione la opcion...</option>
                            <option value="V" >Con garantia</option>
                            <option value="F" >No tiene garantia</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="detalle"><i className="material-icons">contact_mail</i> Problemas</label>
                       <textarea name="detalle" id="detalle" value={detalle} onChange={onChangeEquipo} className="form-control" cols="5" rows="3"></textarea>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="tipo"><i className="material-icons">contact_mail</i> Tipo de Electromestico</label>
                        <select name="tipo" id="tipo" value={tipo} onChange={onChangeEquipo} className="form-control">
                            <option defaultValue="" disabled>Seleccione la opcion...</option>
                            <option value="LAVADORA" >Lavadora</option>
                            <option value="REFRIGERADOR" >Refrigerador</option>
                            <option value="MICROONDAS" >Microondas</option>

                        </select>
                    </div>
                    
                </div>
                {error
                    ? <Error mensaje="Todos los campos deben estar llenos"/>
                    :null
                }
                <button type="submit" className="btn btn-success">Registrar</button>
            </form>
        </Fragment>
     );
}
 
export default FormRegistroCliente;