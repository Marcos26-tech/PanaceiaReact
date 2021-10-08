import React from 'react'





function Perfil() {

    //https://pt-br.reactjs.org/docs/forms.html




    return (
        <div>
            <Form onSubmit={addUser}>
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
                    <FormButton type="submit">Cadastrar</FormButton>
                </FormFieldset>
            </Form>
        </div>
    )
}

export default Perfil
