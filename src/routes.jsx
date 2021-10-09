import React from "react";
import {Switch, Route } from "react-router-dom";

import Home from "./pages/pagehome/PageHome";
import Agenda from "./pages/agenda/PageAgenda";
import Login from "./components/login/Login";
import Registro from "./components/login/cadastro/Registro";
import ForgetPassword from "./components/login/resete/ForgetPassword";
import MostraComentario from "./pages/comentario/PageComentarios";
import CriaComunidades from "./pages/comunidade/PageComunidades";
import Questionario from "./pages/questionario/PageQuestionario";
import Termosdeuso from "./pages/termos/PageTermosDeUso";

function Routes() {
  return (
    <>
      
        <Switch>
          <Route path="/Registro" component={Registro} />
          <Route path="/Forgetpassword" component={ForgetPassword} />
          <Route path="/Agendaeeventos" component={Agenda} />
          <Route path="/Comunidades" component={CriaComunidades} />
          <Route path="/MostraComentario" component={MostraComentario} />
          <Route path="/Questionario" component={Questionario} />
          <Route path="/Termosdeuso" component={Termosdeuso} />
        </Switch>
       
        <Route path="/Login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
      
    </>
  );
}

export default Routes;
