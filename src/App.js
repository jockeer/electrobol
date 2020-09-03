import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './componets/auth/Login';
import Home from './componets/Home'
import NuevaCuenta from './componets/auth/NuevaCuenta'
import Tecnicos from './componets/tecnicos/Tecnicos'
import Reparaciones from './componets/tecnicos/Reparaciones';
import Reportes from './componets/tecnicos/Reportes';
import Detalle from './componets/tecnicos/Detalle'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
        <Route exact path="/tecnicos" component={Tecnicos}/>
        <Route exact path="/reparaciones" component={Reparaciones}/>
        <Route exact path="/reportes" component={Reportes}/>
        <Route exact path="/detalle-electrodomestico/:id/:idreparacion" component={Detalle}/>
      </Switch>
    </Router>
  );
}

export default App;
