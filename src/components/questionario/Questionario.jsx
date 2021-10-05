import React from 'react'
import { Container, Section, Span } from '../comunidade/StyledComunidade';
import styled from 'styled-components';

const StyledQuestionario = styled.div`
        h2 {
            color: red;
            display: block;
        }
`;


function Questionario() {

    function enviarQuestionario() {
        var soma = 0;

        for (let i = 0; i < document.querySelectorAll('.question').length; i++) {
            if (document.getElementsByClassName("question")[i].checked) {
                let numero = document.getElementsByClassName("question")[i]
                soma += parseInt(numero.value)
            }
        }
        alert(soma)
    }

    return (
        <>   <>
            <Span>
                <h1>Questionário de Avaliação - Panace.IA</h1>
                <h3>Por favor, responda com sinceridade</h3>
            </Span>
            <Container>

                <Section>
                    <StyledQuestionario>
                        <h2>Pergunta 1</h2>
                        <input type="radio" class="question" name="question1" value="3" />a maior parte do tempo
                        <input type="radio" class="question" name="question1" value="2" />boa parte do tempo
                        <input type="radio" class="question" name="question1" value="1" />de vez em quando
                        <input type="radio" class="question" name="question1" value="0" />nunca
                    </StyledQuestionario>

                    <StyledQuestionario>

                        <div>
                            <h2>Pergunta 2</h2>
                            <input type="radio" class="question" name="question2" value="0" />a maior parte do tempo
                            <input type="radio" class="question" name="question2" value="1" />boa parte do tempo
                            <input type="radio" class="question" name="question2" value="2" />de vez em quando
                            <input type="radio" class="question" name="question2" value="3" />nunca

                        </div>
                    </StyledQuestionario>

                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 3</h2>
                            <input type="radio" class="question" name="question3" value="3" />a maior parte do tempo
                            <input type="radio" class="question" name="question3" value="2" />boa parte do tempo
                            <input type="radio" class="question" name="question3" value="1" />de vez em quando
                            <input type="radio" class="question" name="question3" value="0" />nunca
                        </div>
                    </StyledQuestionario>

                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 4</h2>
                            <input type="radio" class="question" name="question4" value="0" />a maior parte do tempo
                            <input type="radio" class="question" name="question4" value="1" />boa parte do tempo
                            <input type="radio" class="question" name="question4" value="2" />de vez em quando
                            <input type="radio" class="question" name="question4" value="3" />nunca
                        </div>
                    </StyledQuestionario>

                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 5</h2>
                            <input type="radio" class="question" name="question5" value="3"/>a maior parte do tempo
                            <input type="radio" class="question" name="question5" value="2"/>boa parte do tempo
                            <input type="radio" class="question" name="question5" value="1"/>de vez em quando
                            <input type="radio" class="question" name="question5" value="0"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 6</h2>
                            <input type="radio" class="question" name="question6" value="3"/>a maior parte do tempo
                            <input type="radio" class="question" name="question6" value="2"/>boa parte do tempo
                            <input type="radio" class="question" name="question6" value="1"/>de vez em quando
                            <input type="radio" class="question" name="question6" value="0"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 7</h2>
                            <input type="radio" class="question" name="question7" value="0"/>a maior parte do tempo
                            <input type="radio" class="question" name="question7" value="1"/>boa parte do tempo
                            <input type="radio" class="question" name="question7" value="2"/>de vez em quando
                            <input type="radio" class="question" name="question7" value="3"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 8</h2>
                            <input type="radio" class="question" name="question8" value="3"/>a maior parte do tempo
                            <input type="radio" class="question" name="question8" value="2"/>boa parte do tempo
                            <input type="radio" class="question" name="question8" value="1"/>de vez em quando
                            <input type="radio" class="question" name="question8" value="0"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 9</h2>
                            <input type="radio" class="question" name="question9" value="0"/>a maior parte do tempo
                            <input type="radio" class="question" name="question9" value="1"/>boa parte do tempo
                            <input type="radio" class="question" name="question9" value="2"/>de vez em quando
                            <input type="radio" class="question" name="question9" value="3"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 10</h2>
                            <input type="radio" class="question" name="question10" value="3"/>a maior parte do tempo
                            <input type="radio" class="question" name="question10" value="2"/>boa parte do tempo
                            <input type="radio" class="question" name="question10" value="1"/>de vez em quando
                            <input type="radio" class="question" name="question10" value="0"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 11</h2>
                            <input type="radio" class="question" name="question11" value="3"/>a maior parte do tempo
                            <input type="radio" class="question" name="question11" value="2"/>boa parte do tempo
                            <input type="radio" class="question" name="question11" value="1"/>de vez em quando
                            <input type="radio" class="question" name="question11" value="0"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 12</h2>
                            <input type="radio" class="question" name="question12" value="0"/>a maior parte do tempo
                            <input type="radio" class="question" name="question12" value="1"/>boa parte do tempo
                            <input type="radio" class="question" name="question12" value="2"/>de vez em quando
                            <input type="radio" class="question" name="question12" value="3"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 13</h2>
                            <input type="radio" class="question" name="question13" value="3"/>a maior parte do tempo
                            <input type="radio" class="question" name="question13" value="2"/>boa parte do tempo
                            <input type="radio" class="question" name="question13" value="1"/>de vez em quando
                            <input type="radio" class="question" name="question13" value="0"/>nunca
                        </div>
                    </StyledQuestionario>
                    <StyledQuestionario>
                        <div>
                            <h2>Pergunta 14</h2>
                            <input type="radio" class="question" name="question14" value="0"/>a maior parte do tempo
                            <input type="radio" class="question" name="question14" value="1"/>boa parte do tempo
                            <input type="radio" class="question" name="question14" value="2"/>de vez em quando
                            <input type="radio" class="question" name="question14" value="3"/>nunca
                        </div>
                    </StyledQuestionario>

                    <button onClick={() => enviarQuestionario()}> Enviar Questionário</button>

                </Section>


            </Container>
        </>
        </>
    );
}

export default Questionario;
