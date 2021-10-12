import React, { Component } from "react";
import { FcAddImage, FcComments, FcSms } from "react-icons/fc";
import Comunidades from "../../components/comunidade/Comunidades";
import ImagemAutocuidado from "../../assets/img/imgcomunidade/cuidado.jpg";
import ImagemSaude from "../../assets/img/imgcomunidade/saudef.jpg";

import {
  Container,
  Form,
  SectionPrimeira,
  Div,
  Divi,
  Dividir,
} from "../../assets/style/StyleComunidadeGlobal";

const site ="https://www.vestimentarte.com.br/2020/06/autocuidado-o-que-e-principais-tipos.html"
const site1 ="https://g1.globo.com/pa/santarem-regiao/noticia/2021/10/04/campanha-do-outubro-rosa-abre-com-acao-na-casa-de-saude-da-mulher-e-doacao-de-sangue.ghtml"

class PageComunidades extends Component {

  
  state = {
    comunidade: [
      {
        titulo: "Saúde de Mulheres Depois dos 30 anos",
        descricao:
          "Essa comunidade conversamos sobre as consultas médicas regulares o os exames indispensáveis, que todas as mulher com mais de 30 anos podem adotar como rotina.",
      },
      {
        titulo: "Saúde Infantil",
        descricao:
          "Nessa comunidade conversamos sobre a saúde dos nosso filhos de maniera compreensiva e educativa.",
      },
      {
        titulo: "Saúde Mental",
        descricao:
          "Aqui falamos sobre varios assuntos sobre como manter um nivel de qualidade de vida cognitiva e emocional.",
      },
    ],
    novaComunidade: {
      titulo: "",
      descricao: "",
    },
  };

  adicionarComunidade = (evento) => {
    evento.preventDefault();
    const novaComunidade = { ...this.state.novaComunidade };
    this.setState({
      comunidade: [...this.state.comunidade, novaComunidade],
      novaComunidade: { titulo: "", descricao: "" },
    });
  };

  removerComunidade = (comentario) => {
    let lista = this.state.comunidade;
    lista = lista.filter((c) => c !== comentario);
    this.setState({ comunidade: lista });
  };

  digitacao = (evento) => {
    const { name, value } = evento.target;
    this.setState({
      novaComunidade: { ...this.state.novaComunidade, [name]: value },
    });
  };

  render() {
    return (
      <Container>
        <h1>
          “ Encontre sua terapia, domine a causa, porque você só melhora se sair
          do ponto onde se encontra! by Grupo Panaceia ”
        </h1>
        <h2>Informações uteis de fonte confiável</h2>

        <SectionPrimeira>

          <Div>
            <img src={ImagemAutocuidado} alt="Autocuidado Feminino"/>
            <p><a href={site} target="_blank" rel="noreferrer"><span>"Autocuidado deve ser o cuidado consigo mesma, atenção às próprias necessidades do corpo, mentais e psicológicas." </span></a>
              Esta definição é a mais simples e também mais abrangente. 
              O principal elemento do autocuidado é a atenção voltada para si mesmo, para as próprias necessidades e aspirações.
              O que envolve cuidar de todos os nossos principais aspectos como seres humanos: o físico, o mental e o emocional. </p>
          </Div>
          <Divi>
            <img src={ImagemSaude} alt="cuidados infantil" />
            <p>No <a href={site1} target="_blank" rel="noreferrer"><span>Outubro Rosa</span></a>, médicas refletem sobre como é preciso estruturar a rotina para cuidar da saúde e prevenir o câncer 
              que mais afeta mulheres. Falar sobre a doença é fundamental! Para vencer o estigma, o receio, o peso que a cerca.
              Ao passar por um prédio iluminado de rosa durante este mês, faça uma reflexão. Se você é mulher, já fez seus exames de rotina este ano ?</p>
          </Divi>
          
        </SectionPrimeira>

        <h3>Comunidades disponíveis</h3>
        {this.state.comunidade.map((comentario, indice) => (
          <Comunidades
            key={indice}
            titulo={comentario.titulo}
            onRemove={this.removerComunidade.bind(this, comentario)}
          >
            {comentario.descricao}
          </Comunidades>
        ))}

        <Form method="post" onSubmit={this.adicionarComunidade}>
          <h3>Construa uma comunidade aqui</h3>
          <Dividir>
            <FcComments />
            <input
              type="text"
              name="titulo"
              value={this.state.novaComunidade.titulo}
              onChange={this.digitacao}
              required
              placeholder="Digite o título da comunidade"
            />
            <label>Escolha a categoria da comunidade</label>
            <select>
              <option value="saude">Saúde Feminina</option>
              <option value="mental">Saúde Mental</option>
              <option value="emocional">Inteligencia Emocional</option>
              <option value="auto">Autocuidado</option>
              <option value="filhos">Saúde dos Filhos</option>
              <option value="pets">Mães de Pet</option>
              <option value="outros">Outros</option>
            </select>

          </Dividir>

          <div>
            <FcAddImage />
            <input type="file" />
          </div>
        
          <div>
            <FcSms />
            <textarea
              name="descricao"
              value={this.state.novaComunidade.descricao}
              onChange={this.digitacao}
              rows="4"
              placeholder="Escreva uma pequena descrição sobre a comunidade..."
            />
          </div>
          <button type="submit">Criar Comunidade</button>
        </Form>
      </Container>
    );
  }
}

export default PageComunidades;
