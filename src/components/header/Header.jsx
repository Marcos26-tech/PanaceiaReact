import React, { Component } from "react";
import Logo from "../../img/logo.png";
import Menu from "../menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "../home/Home";
import AcessarGrupo from "../comunidade/AcessarGrupo";
import Agenda from "../agenda/Agenda";
import FormLogin from "../login/FormLogin";
import Registro from "../login/cadastro/Registro";
import ForgetPassword from "../login/resete/ForgetPassword";

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

        <main>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={FormLogin} />
                <Route exact path="/FormLogin" component={FormLogin} />
                <Route exact path="/Registro" component={Registro} />
                <Route
                  exact
                  path="/ForgetPassword"
                  component={ForgetPassword}
                />

                <Route exact path="/Home" component={Home} />
                <Route exact path="/Agendaeeventos" component={Agenda} />
                <Route exact path="/Comunidade" component={AcessarGrupo} />
              </Switch>
            </div>
          </Router>
        </main>
      </>
    );
  }
}
export default Header;
