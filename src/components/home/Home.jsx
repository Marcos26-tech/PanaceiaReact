import React, { Component } from "react";
import Carrossel from "./Carrossel";
import Watson from '../watson/Watson'

import { Title, StyledContainer, Section, Stylediv } from "./StyledHome";

class Home extends Component {
  render() {
    return (
      <>
        <Stylediv>
          <Section>
            <Title>Sejam Bem vindos a Panace I.A</Title>
            <h3>
              “Onde a busca em fazer a felicidade ser rotina na vida de todas as
              pessoas!”
            </h3>
          </Section>
          <StyledContainer>
            <Carrossel />
          </StyledContainer>
          <Watson />
        </Stylediv>
      </>
    );
  }
}
export default Home;
