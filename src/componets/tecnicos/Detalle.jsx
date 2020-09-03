import React,{Fragment,useState,useEffect} from 'react';

import {Link} from 'react-router-dom'

import Barra from '../layout/Barra'
import axios from 'axios';
import Det from './Det'

const Detalle = ({match}) => {
    
    const [detalles, guardarDetalles] = useState([])
    const [infoelectro, guardarInfoElectro] = useState({})
    const [edicion, guardarEdicion] = useState(false)
    const [detail, guardarDetail] = useState('')
    const [actualizacion, guardarActualizacion] = useState({
        aprecio: '',
        aestado:''
    })

    useEffect(() => {
        
        const cargarDetalles = async () => {

            const APIINFOELECTRODOMESTICO =`http://localhost:4000/api/traerInfoElectrodomestico/${match.params.id}`;
            const APIDETALLES =`http://localhost:4000/api/traerDetalles/${match.params.idreparacion}`;


            const [infodetalles,infoelectrodomenstico] = await Promise.all([
                axios(APIDETALLES),
                axios(APIINFOELECTRODOMESTICO)
                // axios(APILISTAGUARDIAS)
            ])
            console.log(infoelectrodomenstico.data[0])
            guardarInfoElectro(infoelectrodomenstico.data[0])
            guardarDetalles(infodetalles.data)
            console.log(infodetalles.data)
            
        }
        cargarDetalles()

    }, [])

    

    
    const onChange = e => {
        guardarActualizacion({
            ...actualizacion,
            [e.target.name]:e.target.value
        })
    }

    const onClick = ()=>{
        guardarEdicion(true)
    }
    const onClickCancel = ()=>{
        guardarEdicion(false)
    }
    const onChangeDetail = e =>{
        guardarDetail(e.target.value)
    }
    const onSubmitCambios = () => {
        const url = `http://localhost:4000/api/actualizarDatosElectrodomesticos/${match.params.idreparacion}`

        const data = {};
        data.estado = aestado
        data.precio = parseInt(aprecio)
        
        
        let JSO = JSON.stringify(data)
        fetch(url, {
            method: 'PUT', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('Actualizado correctamente'));
    }
    const onSubmitDetalle = e => {
        
        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        const url = `http://localhost:4000/api/registroDetalleElectro`

        const data = {};
        data.fecha = fecha
        data.detalle = detail
        data.idreparacion = parseInt(id) 
        
        
        let JSO = JSON.stringify(data)
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('detalle correctamente'));
    }
    const {aprecio,aestado} = actualizacion
    const {correo,detalleproblema,estado,fechaingreso,id,nombre,precio,telefono,tipo} = infoelectro
    return (
        <Fragment>
            <Barra mensaje='Detalle'/>
            <div className="container">
                <h3><Link to='/tecnicos' className="btnnormal"><i className="material-icons">arrow_back</i></Link> Electro {match.params.id} <span>
                    {!edicion
                        ?<button className="btn btn-warning" onClick={onClick} >Editar Precio O estado</button>
                        :null
                    }
                        
                    </span></h3>
                
                {Object.keys(infoelectro).length === 0
                    ?null
                    :<div className="containerDatosElectro">
                        <p><b>id: </b>{id}</p>
                        <p><b>Tipo: </b>{tipo}</p>
                        <p><b>Dueño: </b>{nombre}</p>
                        {estado === 'evaluacion'
                            ?<p><b>Estado: </b><span className="evaluacion">{estado}</span> </p>
                            :estado === 'reparacion'
                            ?<p><b>Estado: </b><span className="reparacion">{estado}</span> </p>
                            :<p><b>Estado: </b><span className="terminado">{estado}</span> </p>
                        }  
                        
                        <p><b>Telefono del Dueño: </b>{telefono}</p>
                        <p><b>Fecha de ingreso: </b>{fechaingreso.substr(0,10)}</p>                    
                        <p><b>Correo del Dueño: </b>{correo}</p>
                        <p><b>Problema Inicial: </b>{detalleproblema}</p>                                      
                        <p><b>Costo: </b>{precio} Bs.</p>                                            
                        <p><b>Tipo: </b>{tipo}</p>
                    </div>
                }
                {edicion
                    ?<form onSubmit={onSubmitCambios} action="">
                        <h4>Escribar los nuevos datos</h4>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="">nuevo precio</label>
                                <input type="number" name="aprecio" value={aprecio} onChange={onChange} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="estate">nuevo estado</label>
                                <select name="aestado"  onChange={onChange} value={aestado} className="form-control" id="estate">
                                    <option value="" disabled>Seleccione un estado</option>
                                    <option value="evaluacion">evaluacion</option>
                                    <option value="reparacion">reparacion</option>
                                    <option value="terminado">terminado</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <button className="btn btn-success" >Actualizar</button>
                                <button className="btn btn-danger" onClick={onClickCancel}>Cancelar</button>
                            </div>
                        </div>
                    </form>
                    :null
                }
                
                
                <div className="containerDetalles">
                    <form onSubmit={onSubmitDetalle} action="">
                    <div className="form-row">
                        <div className="form-group col-md-8 pl-5 pr-5">
                            <h3>Detalle de Avances</h3>
                        {detalles.length===0
                            ? <p>No hay detalles de avances de este electrodomestico</p>
                            : detalles.map(detalle =>{
                                return  <Det key={detalle.id} detalle={detalle}/>
                            })
                        }   
                        </div>
                        <div className="form-group col-md-4">
                        <h3>Escriba su avance</h3>
                            <textarea name="detail" value={detail} onChange={onChangeDetail} className="form-control" id="" cols="30" rows="2"></textarea>
                            <button type="submit" className="btn btn-info" >Registrar Avance</button>
                        </div>
                    </div>
                    </form>
                    
                    
                    
                </div>
            </div>

        </Fragment> 
     );
}
 
export default Detalle;