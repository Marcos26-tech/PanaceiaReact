import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import AcessarGrupo from "./components/comunidade/AcessarGrupo";
import Agenda from "./components/agenda/Agenda";
import FormLogin from "./components/login/FormLogin";
import Registro from "./components/login/cadastro/Registro";
import ForgetPassword from "./components/login/resete/ForgetPassword";
import MostraComentario from "./components/pages/comentario/CriaComentario";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/FormLogin" component={FormLogin} />
        <Route path="/Registro" component={Registro} />
        <Route path="/ForgetPassword" component={ForgetPassword} />
        <Route path="/Agendaeeventos" component={Agenda} />
        <Route path="/Comunidade" component={AcessarGrupo} />
        <Route path="/MostraComentario" component={MostraComentario} />
      </Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
    </>
  );
}

export default Routes;
