import React from 'react';
import styled from 'styled-components';

const StyledFooter= styled.footer`
   text-align: center;
   background: linear-gradient(hsl(108, 48%, 74%), transparent);
   padding:1px;
    p {
    font-size: 15px;
    color: rgb(0, 0, 0);
    }
    @media(max-width:780px){
        width:100%;
        margin-top:55px;
        text-align: center;
    }
`;

const Footer = () => {

   return (
      <>
         <StyledFooter>
            <p>Copyright &copy; Grupo Panace I.A - 2021</p>
         </StyledFooter>
      </>
   )
}
export default Footer;