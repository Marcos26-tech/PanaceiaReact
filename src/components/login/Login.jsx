import React  from 'react';
import FormCadastro from './FormCadastro';
import FormLogin from './FormLogin';
import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #363636, rgb(240, 241, 238));
    height: 100px;
    margin: 0;
    z-index: -1;
  }
`;

function Login() {
  return (
    <> 
      <GlobalStyle />
      <FormCadastro />
      <FormLogin />
    </>
    
  )
}
export default Login
