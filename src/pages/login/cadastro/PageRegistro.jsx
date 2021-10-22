import React, { useState } from "react";
import {
  Form,
  FormWrapper,
  FormHeader,
  FormBody,
  FormFieldset,
  FormInput,
  FormButton,
  FormLink,
} from "../../../assets/style/StyleFormGlobal";

function Registro() {
  let id = "";

  const [user, setUser] = useState({
    id: id,
    nome: "",
    email: "",
    senha: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;
    // "https://api-panaceia.herokuapp.com/rest/user/"
    fetch("http://localhost:8080/https://api-panaceia.herokuapp.com/rest/user/" + id, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {
      window.location = "./termosdeuso";
    });

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem:
          "Usuário cadastrado com sucesso Bem vindo a comunidade Panace I.A",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado!",
      });
    }

    const listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
    const isLogado = JSON.parse(localStorage.getItem("isLogado") || "[]");

    listaUser.push({
      name: user.nome,
      email: user.email,
      password: user.senha,
    });

    isLogado.push({
      logado: true,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));
    localStorage.setItem("isLogado", JSON.stringify(isLogado));
  };

  function validate() {
    if (!user.nome)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo nome!",
      });
    if (!user.email)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo e-mail!",
      });
    if (!user.senha)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo senha!",
      });
    if (user.senha.length < 6)
      return setStatus({
        type: "error",
        mensagem: "Erro: A senha precisa ter pelo menos seis caracteres!",
      });

    return true;
  }

  function someCadastrar() {
    if (user.nome && user.email && user.senha && user.senha.length > 6) {
      return (
        (document.getElementById("form").style.visibility = "hidden"),
        window.location.replace("./termosdeuso")
      );
    }
  }

  return (
    <FormWrapper>
      <FormBody>
        <FormHeader>
          <h2>Cadastro Panace I.A</h2>
        </FormHeader>

        {status.type === "success" ? (<p style={{ color: "#033d11" }}>{status.mensagem}</p>) : ("")}
        {status.type === "error" ? (<p style={{ color: "#ff0000" }}>{status.mensagem}</p>) : ("")}

        <Form onSubmit={addUser} id="form">
          <FormFieldset>
            <label>Nome: </label>
            <FormInput
              type="text"
              name="nome"
              placeholder="Nome completo do usuário"
              onChange={valueInput}
              value={user.nome}
            />
          </FormFieldset>

          <FormFieldset>
            <label>E-mail:</label>
            <FormInput
              type="email"
              name="email"
              placeholder="Melhor e-mail do usuário"
              onChange={valueInput}
              value={user.email}
            />
          </FormFieldset>

          <FormFieldset>
            <label>Senha: </label>
            <FormInput
              type="password"
              name="senha"
              placeholder="Senha para acessar o site"
              autoComplete="on"
              onChange={valueInput}
              value={user.senha}
            />
          </FormFieldset>

          <FormFieldset>
            <FormButton type="submit" onClick={() => someCadastrar()}>
              Cadastrar
            </FormButton>
          </FormFieldset>
        </Form>

        <FormFieldset>
          <FormLink href="./Login">Já tem conta Clique aqui!</FormLink>
        </FormFieldset>
      </FormBody>
    </FormWrapper>
  );
}
export default Registro;
