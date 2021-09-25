import React, {Component} from 'react';
import Carrossel from './Carrossel';

import {Title, StyledContainer, Section} from './StyledHome';


class Home extends Component {
  render() {
      return(
            <>
                <Section>
                    <Title>Sejam Bem vindos a Panace I.A</Title>
                </Section>

                <StyledContainer>
                    <Carrossel />
                </StyledContainer>
            </>
        );
    }
}
export default Home;