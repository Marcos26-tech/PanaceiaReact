import React, { useState } from "react";
import {Form, FormWrapper, FormHeader, FormBody, FormFieldset, FormInput, FormButton, FormLink } from '../../../src/assets/style/StyleFormGlobal';

const Registro = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    //Receber os dados do formulário
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    //Enviar os dados para o back-end
    const addUser = async e => {
        e.preventDefault();

        if(!validate()) return;

        const saveDataForm = true;

            if (saveDataForm) {
                setStatus({
                    type: 'success',
                    mensagem: "Usuário cadastrado com sucesso Bem vindo a comunidade Panace I.A"
                });
                setUser({
                    name: '',
                    email: '',
                    password: ''
                });
                } else {
                setStatus({
                    type: 'error',
                    mensagem: "Erro: Usuário não cadastrado!"
                });
            }
        }

    function validate(){
        if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
        if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
        if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!'});
        if(user.password.length < 6) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});

    return true;
    }

    function someCadastrar() {
        if (user.name && user.email && user.password && user.password.length > 6) {
            return (document.getElementById('form').style.visibility = "hidden",
            window.location.replace('./Termosdeuso'));
        }
    }

    return (
        
        <FormWrapper>
            <FormBody>
                
                <FormHeader>
                    <h2>Cadastro Panace I.A</h2>
                </FormHeader>

                {status.type === 'success' ? <p style={{ color: "#033d11" }}>{status.mensagem}</p> : ""}
                {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

                <Form onSubmit={addUser} id='form'>
                    <FormFieldset>
                        <label>Nome: </label>
                        <FormInput type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} value={user.name} />
                    </FormFieldset>
                
                    <FormFieldset>
                        <label>E-mail:</label>
                        <FormInput type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={valueInput}  value={user.email} />
                    </FormFieldset>

                    <FormFieldset>
                        <label>Senha: </label>
                        <FormInput type="password" name="password" placeholder="Senha para acessar o site" autoComplete="on" onChange={valueInput} value={user.password} />
                    </FormFieldset>

                    <FormFieldset>
                        <FormButton type="submit" onClick={() => someCadastrar()}>Cadastrar</FormButton>
                    </FormFieldset>
                </Form>

                <FormFieldset>
                    <FormLink href="./Login">Já tem conta Clique aqui!</FormLink>
                </FormFieldset>

             </FormBody>

        </FormWrapper>
    )
}  
export default Registro;