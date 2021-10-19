import { React, useEffect, useState } from "react";
import { FcAddImage, FcComments, FcSms } from "react-icons/fc";
import Comunidades from "../../components/comunidade/Comunidades";
import InfoComunidade from "./InfoComunidade";
import {
  Container,
  Form,
  Dividir,
  Div1,
  Div2,
} from "../../assets/style/StyleComunidadeGlobal";

function PageComunidades() {
  // MÉTODO GET
  const [comunidades, setComunidades] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/community")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setComunidades(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO DELETE
  const handleDelete = (id) => {
    fetch("rest/community/" + id, {
      method: "delete",
    })
      .then(() => {
        window.location = "/Comunidades";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // State que auxilia na criação de um novo usuário (POST)
  let id = "";

  const [novaComunidade, setNovaComunidade] = useState({
    id: id,
    nome: "",
    descricao: "",
  });

  const adicionarComunidade = (evento) => {
    evento.preventDefault();

    fetch("/rest/community/" + id, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaComunidade),
    }).then(() => {
      window.location = "/Comunidades";
    });
  };

  const digitacao = (evento) => {
    setNovaComunidade({
      ...novaComunidade,
      [evento.target.name]: evento.target.value,
    });
  };

  return (
    <Container>
      <h1>
        “ Encontre sua terapia, domine a causa, porque você só melhora se sair
        do ponto onde se encontra! by Grupo Panaceia ”
      </h1>
      <h2>Informações uteis de fonte confiável</h2>
      <InfoComunidade />
      <h3>Comunidades disponíveis</h3>
      {comunidades.map((comunidade) => (
        <Comunidades
          key={comunidade.id}
          titulo={comunidade.nome}
          id={comunidade.id}
          onRemove={handleDelete.bind(this, comunidade.id)}
        >
          {comunidade.descricao}
        </Comunidades>
      ))}

      <Form onSubmit={adicionarComunidade}>
        <h3>Construa uma comunidade aqui</h3>
        <Dividir>
          <label>
            <FcComments />
          </label>
          <input
            type="text"
            name="nome"
            value={novaComunidade.nome}
            onChange={digitacao}
            required
            placeholder="Digite o título da comunidade"
          />
        </Dividir>

        <Div1>
          <label>
            <FcAddImage />
          </label>
          <input type="file" />
        </Div1>

        <Div2>
          <label>
            <FcSms />
          </label>
          <textarea
            name="descricao"
            value={novaComunidade.descricao}
            onChange={digitacao}
            rows="4"
            placeholder="Escreva uma pequena descrição sobre a comunidade..."
          />
        </Div2>
        <button type="submit">Criar Comunidade</button>
      </Form>
    </Container>
  );
}

export default PageComunidades;
