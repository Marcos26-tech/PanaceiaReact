import React, {Component} from 'react';
import Carrossel from './Carrossel';

import {Title, StyledContainer, Section} from './StyledHome';

class Home extends Component {
  render() {
      return(
        <>
          <Section>
            <Title>Sejam Bem vindos a Loja Moda Panace I.A</Title>
            <h3>“ A buscar por fazer a felicidade ser rotima na vida de todxs as pessoas!”</h3>
          </Section>
          <StyledContainer>
            <Carrossel />
          </StyledContainer>
        </>
      );
  }
}
export default Home;