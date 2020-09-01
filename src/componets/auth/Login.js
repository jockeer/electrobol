import React,{useState} from 'react';

import Error from '../layout/Error'

const Login = (props) => {

    const [usuario, guadarUsuario] = useState({
        user: '',
        pass: ''
    })

    const {user, pass} = usuario;
    const [error, guardarError] = useState(false);

    const onChange = e => {
        guadarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => { 
        e.preventDefault();

        if (user.trim() === '' || pass.trim() === '') {
            guardarError(true)
            return;    
        }
        guardarError(false)

        props.history.push('/Home');
        
    }

    return ( 
        <div className="containerLogin">
            <div className="card">
                <div className="card-header"><h2>Iniciar Sesion</h2></div>
                <div className="card-body">
                <form onSubmit={onSubmit} >
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                        <label htmlFor="user">Usuario</label>
                        <input type="text" className="form-control" id="user" value={user} name="user" onChange={onChange}/>
                       
                        </div>
                        <div className="col-md-12 mb-3">
                        <label htmlFor="pass">Constraseña</label>
                        <input type="text" className="form-control" id="pass" value={pass} name="pass" onChange={onChange}/>
                        
                        </div>
                    </div>
                    
                    {error 
                        ? <Error mensaje="usuario o contraseña incorrecto" />  
                        :null
                    }  

                    <button className="btn btn-primary btn-block" type="submit">Ingresar</button>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;