import React from "react";
import {Switch, Route } from "react-router-dom";

import Home from "./pages/pagehome/PageHome";
import Agenda from "./pages/agenda/PageAgenda";
import Login from "./pages/login/PageLogin";
import Registro from "./pages/login/cadastro/PageRegistro";
import ForgetPassword from "./pages/login/setsenha/PageForgetPassword";
import MostraComentario from "./pages/comentario/PageComentarios";
import CriaComunidades from "./pages/comunidade/PageComunidades";
import Questionario from "./pages/questionario/PageQuestionario";
import Termosdeuso from "./pages/termos/PageTermosDeUso";
import Perfil from './pages/perfil/PagePerfil'
import PageInteresse from "./pages/interesse/PageInteresse";

function Routes() {
  return (
    <>
      
        <Switch>
          <Route path="/Registro" component={Registro} />
          <Route path="/Forgetpassword" component={ForgetPassword} />
          <Route path="/Agendaeeventos" component={Agenda} />
          <Route path="/Comunidades" component={CriaComunidades} />
          <Route path="/Interesses" component={PageInteresse} />
          <Route path="/depo/:id" component={MostraComentario} />
          <Route path="/Questionario" component={Questionario} />
          <Route path="/Termosdeuso" component={Termosdeuso} />
          <Route path="/Perfil" component={Perfil} />
        </Switch>
       
        <Route path="/Login" component={Login} />
        <Route path="/Home" exact component={Home} />
        <Route path="/" exact component={Home} />
      
    </>
  );
}

export default Routes;
