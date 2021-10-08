import React, { Component } from "react";
import Carrossel from "./Carrossel";

import { Title, StyledContainer, Section, Container} from "./StyledHome";

class Home extends Component {
  render() {
    return (
      <>
        <Container>
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
        </Container>
      </>
    );
  }
}
export default Home;
