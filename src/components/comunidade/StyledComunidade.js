import styled from 'styled-components';

export const Container = styled.section`
  background: rgb(255, 255, 255);
  border-radius: 4%;
  margin: 1rem 8% 2rem;
  text-align: center;
  justify-content: center;
    button {
        margin:20px;
        font-size:15px;
    }
`;

export const Section = styled.section`
    margin:1px 2rem 2rem;
    padding:2px;
    display: block;
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
    img{
        width:15%;
        height:7rem;
    }
`;

export const Span = styled.div`
    font-weight:bold;
    margin-top:5rem;
    margin-bottom:0;
    h1, h3{
        color: rgb(95, 250, 5);
        text-align:center;
    }

`;

