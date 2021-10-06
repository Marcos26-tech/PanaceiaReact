import React, { Component } from "react";
import Logo from "../../assets/img/logo.png";
import Menu from "../menu/Menu";
import styled from "styled-components";

import { Switch, Route}  from "react-router-dom";

import Home from "../home/Home";
import AcessarGrupo from "../comunidade/AcessarGrupo";
import Agenda from "../agenda/Agenda";
import FormLogin from "../login/FormLogin";
import Registro from "../login/cadastro/Registro";
import ForgetPassword from "../login/resete/ForgetPassword";
import MostraComentario from '../pages/comentario/MostraComentario'

const StyledHeader = styled.header`
  width: 100%;
  background-color: #48a048;
  height: 110px;
  img {
    height: 100px;
    width: 100px;
    padding: 10px;
    @media (max-width: 780px) {
      align-items: center;
      padding-left: 19%;
    }
  }
`;

const Stylednovo = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin: 0;
    padding-top: 2rem;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 780px) {
      width: 100%;
      font-size: 25px;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <Stylednovo>
            <img src={Logo} alt="logo do site"></img>
            <p>Panace IA</p>
          </Stylednovo>
          <Menu />
        </StyledHeader>

        <Switch>
            <Route path="/" exact component={FormLogin} />
            <Route path="/FormLogin" component={FormLogin} />
            <Route path="/Registro" component={Registro} />
            <Route path="/ForgetPassword" component={ForgetPassword} />
            <Route path="/Agendaeeventos" component={Agenda} />
            <Route path="/Comunidade" component={AcessarGrupo} />
            <Route path="/MostraComentario" component={MostraComentario} />

        </Switch>
          <Route path="/Home" component={Home} />
      </>
    );
  }
}
export default Header;
