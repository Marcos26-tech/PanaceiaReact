import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Logo from "../../assets/img/logo.png";
import Menu from "../../pages/menu/PageMenu";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: inline-block;
  width: 100%;
  background-color: #48a048;
  height: 99px;
  img {
    position: absolute;
    height: 80px;
    width: 80px;
    padding: 10px 82px 0 0;
  }
`;

const Stylednovo = styled.div`
  display: flex;
  justify-content: center;
  p {
    position: relative;
    margin: 0 0 0 175px;
    padding-top: 2rem;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 780px) {
      width: 100%;
      font-size: 25px;
      padding-left:5.5rem;
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
            <p>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Panaceia")
                  .pauseFor(2000)
                  .deleteChars(10)
                  .typeString("Panace IA")
                  .start(200);
                }}
              />
            </p>
          </Stylednovo>
          <Menu />
        </StyledHeader>
      </>
    );
  }
}
export default Header;
