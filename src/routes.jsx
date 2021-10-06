import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../home/Home";
import AcessarGrupo from "../comunidade/AcessarGrupo";
import Agenda from "../agenda/Agenda";
import FormLogin from "../login/FormLogin";
import Registro from "../login/cadastro/Registro";
import ForgetPassword from "../login/resete/ForgetPassword";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FormLogin} />
        <Route path="/FormLogin" component={FormLogin} />
        <Route path="/Registro" component={Registro} />
        <Route path="/ForgetPassword" component={ForgetPassword} />
        <Route path="/Agendaeeventos" component={Agenda} />
        <Route path="/Comunidade" component={AcessarGrupo} />
      </Switch>
      <Route path="/Home" component={Home} />
    </div>
  );
}

export default Routes;
