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
        <Route exact path="/FormLogin" component={FormLogin} />
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/ForgetPassword" component={ForgetPassword} />
        <Route exact path="/Agendaeeventos" component={Agenda} />
        <Route exact path="/Comunidade" component={AcessarGrupo} />
      </Switch>
      <Route exact path="/Home" component={Home} />
    </div>
  );
}

export default Routes;
