import { React, useEffect, useState } from "react";
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

const site = "https://www.vestimentarte.com.br/2020/06/autocuidado-o-que-e-principais-tipos.html"
const site1 = "https://g1.globo.com/pa/santarem-regiao/noticia/2021/10/04/campanha-do-outubro-rosa-abre-com-acao-na-casa-de-saude-da-mulher-e-doacao-de-sangue.ghtml"

function PageComunidades() {

  // MÉTODO GET
  const [comunidades, setComunidades] = useState([])

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/community").then((resp) => {
      return resp.json()
    }).then((resp) => {
      setComunidades(resp)
      console.log(resp)
    }).catch(error => {
      console.log(error)
    });
  }, [])

  // MÉTODO DELETE
  const handleDelete = (id) => {
    fetch("rest/community/" + id, {
      method: "delete"
    }).then(() => {
      window.location = "/Comunidades"
    }).catch((error) => {
      console.log(error)
    })
  }

  // State que auxilia na criação de um novo usuário (POST)
  let id = ""

  const [novaComunidade, setNovaComunidade] = useState({
    id: id,
    nome: "",
    descricao: "",
  })

  const adicionarComunidade = (evento) => {
    evento.preventDefault();

    fetch("/rest/community/" + id, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(novaComunidade)
    }).then(() => {
      window.location = "/Comunidades"
    })
  }

  const digitacao = (evento) => {
    setNovaComunidade({ ...novaComunidade, [evento.target.name]: evento.target.value })
  }


  return (
    <Container>
      <h1>
        “ Encontre sua terapia, domine a causa, porque você só melhora se sair
        do ponto onde se encontra! by Grupo Panaceia ”
      </h1>
      <h2>Informações uteis de fonte confiável</h2>

      <SectionPrimeira>

        <Div>
          <img src={ImagemAutocuidado} alt="Autocuidado Feminino" />
          <p><a href={site} target="_blank" rel="noreferrer"><span>"Autocuidado deve ser o cuidado consigo mesma, atenção às próprias necessidades do corpo, mentais e psicológicas"</span></a> Esta definição
            é a mais simples e também mais abrangente.
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
      {comunidades.map((comunidade) => (
        <Comunidades
          key={comunidade.id}
          titulo={comunidade.nome}
          id={comunidade.id}
          onRemove={handleDelete.bind(this, comunidade.id)}>
          {comunidade.descricao}
        </Comunidades>
      ))}

      <Form onSubmit={adicionarComunidade}>
        <h3>Construa uma comunidade aqui</h3>
        <Dividir>
          <label><FcComments /></label>
          <input
            type="text"
            name="nome"
            value={novaComunidade.nome}
            onChange={digitacao}
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
          <label><FcAddImage /></label>
          <input type="file" />
        </div>

        <div>
          <label><FcSms /></label>
          <textarea
            name="descricao"
            value={novaComunidade.descricao}
            onChange={digitacao}
            rows="4"
            placeholder="Escreva uma pequena descrição sobre a comunidade..."
          />
        </div>
        <button type="submit">Criar Comunidade</button>
      </Form>
    </Container>
  );
}

export default PageComunidades;
