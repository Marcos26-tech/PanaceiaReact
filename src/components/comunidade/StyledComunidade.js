import styled from 'styled-components';

export const Container = styled.section`
  align-items:center;
  display: block;
  margin-top:1rem;
  margin-left:10rem;
  margin-right:10rem;
  background-color: #fff;
  button {
        margin:20px;
        font-size:15px;
    }
`;

export const Section = styled.section`
        margin:15px;
        padding:5px;
    div {
        display:flex;
        margin:15px;
        padding:5px;
        align-items: center;
        font-size:15px;
    };
    a {
        text-decoration: none;  
        margin:5px;
        padding:0;
        cursor:pointer;
    };
    p {
        text-align: center;
        margin:2px;
        padding:5px; 
    };

`;

export const Span = styled.div`
    font-weight:bold;
    h1, h3{
        color: rgb(95, 250, 5);
        text-align:center;
        padding:5px;
        margin:5px;
    }

`;

