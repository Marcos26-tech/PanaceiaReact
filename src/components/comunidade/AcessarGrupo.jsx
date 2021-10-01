import React from 'react';
import {Container, Section, Span,} from './StyledComunidade';

import Infatil from '';
import Mulheres from '';
import Mental from '';

function AcessarGrupo() {
    return (
        <> 
            <Span>
                <h1>Comunidades Panace.IA</h1>
                <h3>Juntos por um Futuro Saudável</h3>
            </Span>
            <Container>
                
                <button>Crie sua Comunidade</button>

                <Section>
                    <div>
                        <img src={Infatil} alt="Saúde Infantil"/>
                        <a href="">Saúde Infantil</a>
                        <p>Descrição sobre o essa comunidade</p>
                    </div>

                    <div>
                    <img src={Mulheres} alt="Saúde das Mulheres"/>
                        <a href="">Saúde para Mulheres</a>
                        <p>Descrição sobre o essa comunidade</p>
                    </div>

                    <div>
                    <img src={Mental} alt="Saúde Mental"/>
                        <a href="">Saúde Mental</a>
                        <p>Descrição sobre o essa comunidade</p>
                    </div>

                </Section>
            </Container>
        </>
    )
}

export default AcessarGrupo;
