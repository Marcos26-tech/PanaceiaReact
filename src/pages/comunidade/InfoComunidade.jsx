import React from "react";
import ImagemAutocuidado from "../../assets/img/imgcomunidade/cuidado.jpg";
import ImagemSaude from "../../assets/img/imgcomunidade/saudef.jpg";
import {
  SectionPrimeira,
  Div,
  Divi,
} from "../../assets/style/StyleComunidadeGlobal";

const site =
  "https://www.vestimentarte.com.br/2020/06/autocuidado-o-que-e-principais-tipos.html";
const site1 =
  "https://g1.globo.com/pa/santarem-regiao/noticia/2021/10/04/campanha-do-outubro-rosa-abre-com-acao-na-casa-de-saude-da-mulher-e-doacao-de-sangue.ghtml";

function InfoComunidade() {
  return (
    <>
      <SectionPrimeira>
        <Div>
          <img src={ImagemAutocuidado} alt="Autocuidado Feminino" />
          <p>
            <a href={site} target="_blank" rel="noreferrer">
              <span>
                "Autocuidado deve ser o cuidado consigo mesma, atenção às
                próprias necessidades do corpo, mentais e psicológicas"
              </span>
            </a>{" "}
            Esta definição é a mais simples e também mais abrangente. O
            principal elemento do autocuidado é a atenção voltada para si mesmo,
            para as próprias necessidades e aspirações. O que envolve cuidar de
            todos os nossos principais aspectos como seres humanos: o físico, o
            mental e o emocional.{" "}
          </p>
        </Div>
        <Divi>
          <img src={ImagemSaude} alt="cuidados infantil" />
          <p>
            No{" "}
            <a href={site1} target="_blank" rel="noreferrer">
              <span>Outubro Rosa</span>
            </a>
            , médicas refletem sobre como é preciso estruturar a rotina para
            cuidar da saúde e prevenir o câncer que mais afeta mulheres. Falar
            sobre a doença é fundamental! Para vencer o estigma, o receio, o
            peso que a cerca. Ao passar por um prédio iluminado de rosa durante
            este mês, faça uma reflexão. Se você é mulher, já fez seus exames de
            rotina este ano ?
          </p>
        </Divi>
      </SectionPrimeira>
      <SectionPrimeira>
        <Div>
          <img src={ImagemAutocuidado} alt="Autocuidado Feminino" />
          <p>
            <a href={site} target="_blank" rel="noreferrer">
              <span>
                "Autocuidado deve ser o cuidado consigo mesma, atenção às
                próprias necessidades do corpo, mentais e psicológicas"
              </span>
            </a>{" "}
            Esta definição é a mais simples e também mais abrangente. O
            principal elemento do autocuidado é a atenção voltada para si mesmo,
            para as próprias necessidades e aspirações. O que envolve cuidar de
            todos os nossos principais aspectos como seres humanos: o físico, o
            mental e o emocional.{" "}
          </p>
        </Div>
        <Divi>
          <img src={ImagemSaude} alt="cuidados infantil" />
          <p>
            No{" "}
            <a href={site1} target="_blank" rel="noreferrer">
              <span>Outubro Rosa</span>
            </a>
            , médicas refletem sobre como é preciso estruturar a rotina para
            cuidar da saúde e prevenir o câncer que mais afeta mulheres. Falar
            sobre a doença é fundamental! Para vencer o estigma, o receio, o
            peso que a cerca. Ao passar por um prédio iluminado de rosa durante
            este mês, faça uma reflexão. Se você é mulher, já fez seus exames de
            rotina este ano ?
          </p>
        </Divi>
      </SectionPrimeira>
      <SectionPrimeira>
        <Div>
          <img src={ImagemAutocuidado} alt="Autocuidado Feminino" />
          <p>
            <a href={site} target="_blank" rel="noreferrer">
              <span>
                "Autocuidado deve ser o cuidado consigo mesma, atenção às
                próprias necessidades do corpo, mentais e psicológicas"
              </span>
            </a>{" "}
            Esta definição é a mais simples e também mais abrangente. O
            principal elemento do autocuidado é a atenção voltada para si mesmo,
            para as próprias necessidades e aspirações. O que envolve cuidar de
            todos os nossos principais aspectos como seres humanos: o físico, o
            mental e o emocional.{" "}
          </p>
        </Div>
        <Divi>
          <img src={ImagemSaude} alt="cuidados infantil" />
          <p>
            No{" "}
            <a href={site1} target="_blank" rel="noreferrer">
              <span>Outubro Rosa</span>
            </a>
            , médicas refletem sobre como é preciso estruturar a rotina para
            cuidar da saúde e prevenir o câncer que mais afeta mulheres. Falar
            sobre a doença é fundamental! Para vencer o estigma, o receio, o
            peso que a cerca. Ao passar por um prédio iluminado de rosa durante
            este mês, faça uma reflexão. Se você é mulher, já fez seus exames de
            rotina este ano ?
          </p>
        </Divi>
      </SectionPrimeira>
    </>
  );
}

export default InfoComunidade;
