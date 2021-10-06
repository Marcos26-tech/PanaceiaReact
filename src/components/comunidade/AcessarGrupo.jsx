import React from 'react';
import {Container, Section, Span,} from './StyledComunidade';

import Infantil from '../../img/imgcomunidade/infantil.jpg';
import Mulheres from '../../img/imgcomunidade/mulheres.jpg';
import Mental from '../../img/imgcomunidade/mental.jpg';

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
                        <img src={Infantil} alt="Saúde Infantil"/>
                        <a href="./MostraComentario">Saúde Infantil</a>
                        <p>Descrição sobre o essa comunidade</p>
                    </div>

                    <div>
                        <img src={Mulheres} alt="Saúde das Mulheres"/>
                        <a href="./#">Saúde para Mulheres</a>
                        <p>Descrição sobre o essa comunidade</p>
                    </div>

                    <div>
                        <img src={Mental} alt="Saúde Mental"/>
                        <a href="./#">Saúde Mental</a>
                        <p>Descrição sobre o essa comunidade</p>
                    </div>

                    <div>
                        <img src={Mental} alt="Saúde Mental"/>
                        <a href="./#">Saúde Mental</a>
                        <p>Descrição sobre o essa comunidade</p>
                    </div>


                </Section>
            </Container>
        </>
    )
}

export default AcessarGrupo;
