import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Agenda from "./components/agenda/Agenda";
import Login from "./components/login/Login";
import Registro from "./components/login/cadastro/Registro";
import ForgetPassword from "./components/login/resete/ForgetPassword";
import MostraComentario from "./components/comentario/CriaComentario";
import CriaComunidades from './components/comunidade/CriaComunidades'

function Routes() {
  return (
    <>
      <Switch>
        <Route path="login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/forgetPassword" component={ForgetPassword} />
        <Route path="/agendaeeventos" component={Agenda} />
        <Route path="/comunidades" component={CriaComunidades} />
        <Route path="/mostraComentario" component={MostraComentario} />
      </Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
    </>
  );
}

export default Routes;
