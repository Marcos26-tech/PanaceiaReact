import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Agenda from "./components/agenda/Agenda";
import Login from "./components/login/Login";
import Registro from "./components/login/cadastro/Registro";
import ForgetPassword from "./components/login/resete/ForgetPassword";
import MostraComentario from "./pages/comentario/PageComentarios";
import CriaComunidades from "./pages/comunidade/PageComunidades";
import Questionario from "./components/questionario/Questionario";
import Termosdeuso from "./components/termo/TermosDeUso";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Registro" component={Registro} />
          <Route path="/Forgetpassword" component={ForgetPassword} />
          <Route path="/Agendaeeventos" component={Agenda} />
          <Route path="/Comunidades" component={CriaComunidades} />
          <Route path="/MostraComentario" component={MostraComentario} />
          <Route path="/Questionario" component={Questionario} />
          <Route path="/Termosdeuso" component={Termosdeuso} />
        </Switch>
      </Router>  
        <Route path="/Login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
      
    </>
  );
}

export default Routes;
