import React from "react";
import { Container, Section, Span, StyledQuestionario} from "../../assets/style/StyleGlobal";


const Questionario = () => {
  function validarQuestionario(qtdPerguntas) {
    if (qtdPerguntas < 14) {
      alert("É necessário responder todas as perguntas!");
    } else {
      alert("Pode seguir sua navegação pela Panace IA! <3");
      window.location.replace('./Comunidades')
    }
  }

  function calcularScore() {
    var scoreAnsiedade = 0;
    var scoreDepressao = 0;
    for (let i = 0; i < document.querySelectorAll(".question").length; i++) {
      if (document.getElementsByClassName("question")[i].checked) {
        let pergunta = document.getElementsByClassName("question")[i];
        let numeroPergunta = parseInt(pergunta.name);

        if (numeroPergunta % 2 === 0) {
          scoreDepressao += parseInt(pergunta.value);
        } else {
          scoreAnsiedade += parseInt(pergunta.value);
        }
      }
    }
    alert(
      "Nível de ansiedade: " +
        scoreAnsiedade +
        "\nNível de depressão:" +
        scoreDepressao
    );
  }

  function enviarQuestionario() {
    var scoreTotal = 0;
    var qtdPergunta = 0;

    for (let i = 0; i < document.querySelectorAll(".question").length; i++) {
      if (document.getElementsByClassName("question")[i].checked) {
        let numero = document.getElementsByClassName("question")[i];

        scoreTotal += parseInt(numero.value);

        qtdPergunta += 1;
      }
    }

    validarQuestionario(qtdPergunta);
    calcularScore();
    alert("\nTotal" + scoreTotal);
  }

  return (
    <>
      <Container>
        <Span>
          <h1>Questionário de Avaliação - Panace.IA</h1>
          <h3>Por favor, responda com sinceridade</h3>
        </Span>
        <Section>
          <StyledQuestionario>
            <h2>1 - Eu me sinto tensa ou contraída:</h2>
            <input type="radio" class="question" name="1" value="3" />a maior
            parte do tempo
            <input type="radio" class="question" name="1" value="2" />
            boa parte do tempo
            <input type="radio" class="question" name="1" value="1" />
            <span>de vez em quando</span>
            <input type="radio" class="question" name="1" value="0" />
            nunca
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>2 - Eu ainda sinto que gosto das mesmas coisas de antes:</h2>
            <input type="radio" class="question" name="2" value="0" />
            sim, do mesmo jeito que antes
            <input type="radio" class="question" name="2" value="1" />
            não tanto quanto antes
            <input type="radio" class="question" name="2" value="2" />
            só um pouco
            <input type="radio" class="question" name="2" value="3" />
            já não consigo ter prazer em nada
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>
              3 - Eu sinto uma espécie de medo, como se alguma coisa ruim fosse
              acontecer:
            </h2>
            <input type="radio" class="question" name="3" value="3" />
            sim, de jeito muito forte
            <input type="radio" class="question" name="3" value="2" />
            sim, mas não tão forte
            <input type="radio" class="question" name="3" value="1" />
            um pouco, mas isso não me preocupa
            <input type="radio" class="question" name="3" value="0" />
            não sinto nada disso
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>4 - Dou risada e me divirto quando vejo coisas engraçadas:</h2>
            <input type="radio" class="question" name="4" value="0" />
            do mesmo jeito que antes
            <input type="radio" class="question" name="4" value="1" />
            atualmente um pouco menos
            <input type="radio" class="question" name="4" value="2" />
            atualmente bem menos
            <input type="radio" class="question" name="4" value="3" />
            não consigo mais
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>5 - Estou com a cabeça cheia de preocupações:</h2>
            <input type="radio" class="question" name="5" value="3" />a maior
            parte do tempo
            <input type="radio" class="question" name="5" value="2" />
            boa parte do tempo
            <input type="radio" class="question" name="5" value="1" />
            <span>de vez em quando</span>
            <input type="radio" class="question" name="5" value="0" />
            raramente
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>6 - Eu me sinto alegre:</h2>
            <input type="radio" class="question" name="6" value="3" />
            nunca
            <input type="radio" class="question" name="6" value="2" />
            <span>poucas vezes</span>
            <input type="radio" class="question" name="6" value="1" />
            muitas vezes
            <input type="radio" class="question" name="6" value="0" />a maior
            parte do tempo
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>7 - Consigo ficar sentada à vontade e me sentir relaxada:</h2>
            <input type="radio" class="question" name="7" value="0" />
            sim, <span>quase sempre</span>
            <input type="radio" class="question" name="7" value="1" />
            muitas vezes
            <input type="radio" class="question" name="7" value="2" />
            <span>poucas vezes</span>
            <input type="radio" class="question" name="7" value="3" />
            nunca
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>8 - Eu estou lenta para pensar e fazer coisas:</h2>
            <input type="radio" class="question" name="8" value="3" />
            <span>quase sempre</span>
            <input type="radio" class="question" name="8" value="2" />
            muitas vezes
            <input type="radio" class="question" name="8" value="1" />
            <span>poucas vezes</span>
            <input type="radio" class="question" name="8" value="0" />
            nunca
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>
              9 - Eu tenho uma sensação ruim de medo, como um frio na barriga ou
              um aperto no estômago:
            </h2>
            <input type="radio" class="question" name="9" value="0" />
            nunca
            <input type="radio" class="question" name="9" value="1" />
            <span>de vez em quando</span>
            <input type="radio" class="question" name="9" value="2" />
            muitas vezes
            <input type="radio" class="question" name="9" value="3" />
            <span>quase sempre</span>
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>10 - Eu perdi o interesse em cuidar da minha aparência:</h2>
            <input type="radio" class="question" name="10" value="3" />
            completamente
            <input type="radio" class="question" name="10" value="2" />
            não estou mais me cuidando como eu deveria
            <input type="radio" class="question" name="10" value="1" />
            talvez não tanto quanto antes
            <input type="radio" class="question" name="10" value="0" />
            me cuido do mesmo jeito que antes
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>
              11 - Eu me sinto inquieta, como se eu não pudesse ficar parada em
              lugar nenhum:
            </h2>
            <input type="radio" class="question" name="11" value="3" />
            sim, demais
            <input type="radio" class="question" name="11" value="2" />
            bastante
            <input type="radio" class="question" name="11" value="1" />
            um pouco
            <input type="radio" class="question" name="11" value="0" />
            não me sinto assim
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>
              12 - Fico animada, esperando animada as coisas boas que estão por
              vir
            </h2>
            <input type="radio" class="question" name="12" value="0" />
            do mesmo jeito que antes
            <input type="radio" class="question" name="12" value="1" />
            um pouco menos que antes
            <input type="radio" class="question" name="12" value="2" />
            <span>um pouco menos que antes</span>
            <input type="radio" class="question" name="12" value="3" />
            <span>quase nunca</span>
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>13 - De repente, tenho a sensação de entrar em pânico:</h2>
            <input type="radio" class="question" name="13" value="3" />
            <span>a quase todo momento</span>
            <input type="radio" class="question" name="13" value="2" />
            <span>várias vezes</span>
            <input type="radio" class="question" name="13" value="1" />
            <span>de vez em quando</span>
            <input type="radio" class="question" name="13" value="0" />
            <span>não senti isso</span>
          </StyledQuestionario>

          <StyledQuestionario>
            <h2>
              14 - Consigo sentir prazer quando assisto a um bom programa de
              televisão, de rádio ou quando leio alguma coisa:
            </h2>
            <input type="radio" class="question" name="14" value="0" />
            <span>quase sempre</span>
            <input type="radio" class="question" name="14" value="1" />
            <span>várias vezes</span>
            <input type="radio" class="question" name="14" value="2" />
            <span>poucas vezes</span>
            <input type="radio" class="question" name="14" value="3" />
            <span><span>quase nunca</span></span>
          </StyledQuestionario>

          <button onClick={() => enviarQuestionario()}>
            {" "}
            Enviar Questionário
          </button>
        </Section>
      </Container>
    </>
  );
}
export default Questionario;
