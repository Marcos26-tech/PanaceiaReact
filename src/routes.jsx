import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Agenda from "./components/agenda/Agenda";
import Login from "./components/login/Login";
import Registro from "./components/login/cadastro/Registro";
import ForgetPassword from "./components/login/resete/ForgetPassword";
import MostraComentario from "./components/comentario/CriaComentario";
import CriaComunidades from "./components/comunidade/CriaComunidades";


function Routes() {
  return (
    <>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Registro" component={Registro} />
        <Route path="/Forgetpassword" component={ForgetPassword} />
        <Route path="/Agendaeeventos" component={Agenda} />
        <Route path="/Comunidades" component={CriaComunidades} />
        <Route path="/MostraComentario" component={MostraComentario} />
      </Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
    </>
  );
}

export default Routes;
