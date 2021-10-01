import React, { useState } from 'react';
import styled, { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, rgb(250, 78, 81), rgb(225, 238, 195));
    height: 100px;
    margin: 0;
  }
`;

function Login() {
  return (
    <> 
      <GlobalStyle />

      
    </>
    
  )
}
export default Login
