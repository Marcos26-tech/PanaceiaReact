import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../assets/style/StyleMenu";

const Menu = () => {
  let isLogado = window.localStorage.getItem("isLogado");

  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/AgendaeEventos">Agenda & Eventos</Link>
          </li>
          <li>
            <Link to="/Comunidades">Comunidade</Link>
          </li>
          <li>
            {isLogado ? (
              <Link to="/Perfil">Perfil</Link>
            ) : (
              <Link to="/Login">Login</Link>
            )}
          </li>
        </ul>
      </Nav>
    </>
  );
};
export default Menu;
