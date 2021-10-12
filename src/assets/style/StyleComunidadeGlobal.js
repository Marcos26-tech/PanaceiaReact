import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 0 0;
  padding: 0 50px;
  background-color: #fff;
  h1 {
    text-align: center;
    margin: 12px;
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  h3 {
    font-size: 20px;
    margin-bottom: 25px;
    padding: 2px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  h2 {
    font-size: 20px;
    padding: 2px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  form {
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }
  input {
    width: 300px;
    color: #4a5568;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    display: block;
    border-radius: 0.5rem;
    @media (max-width: 789px) {
      width: 89%;
      height: 6rem;
    }
  }
  textarea {
    width: 95%;
    color: #4a5568;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    display: block;
    border-radius: 0.5rem;
    @media (max-width: 789px) {
      width: 89%;
      height: 6rem;
    }
  }
  @media (max-width: 789px) {
    margin: 14.5rem 3% auto;
    display: block;
    padding: 15px;
    height: 100%;
    h1{
      font-size:16px;
    }
    h3{
      font-size:14px;
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(25, 121, 6);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  &:hover {
    background-color: rgb(122, 243, 9);
    cursor: pointer;
  }
`;

//fomulario de criar comunidades
export const Form = styled.form`
  div {
    margin-top: -5px;
  }
  input,
  textarea {
    width:90%;
    margin-top: -25px;
    margin-left: 25px;
    padding-left: 10px;
    position: relative;
  }
  button {
    background-color: rgb(25, 121, 6);
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 25px;
    border-radius: 0.5rem;
    border: none;
    &:hover {
      background-color: rgb(122, 243, 9);
      cursor: pointer;
    }
  }
`;

// inicio do stilo da seção de comunidade
export const Divi = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  
  img {
    width:9rem;
    height:10rem;
  }
  span{
    color: rgb(194, 5, 131);
    font-weight:bold;
    font-size:18px;
  }
  @media (max-width: 789px) {
    span{
      font-size:14px;
      text-align:center;
    }
    img{
      width:8rem;
      height:10rem;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  img {
    width:10rem;
    height:10rem;
  }
  span{
    color: rgb(194, 5, 131);
    font-weight:bold;
    font-size:16px;
  }
  @media (max-width: 789px) {
    span{
      font-size:14px;
    }
    img{
      width:8rem;
      height:10rem;
    }
  }
`;

export const SectionPrimeira = styled.section`
  text-decoration:nome;
  display: flex;
  align-items:center;
  border-bottom: 1px solid rgb(25, 121, 6);
  p{
    text-align:justify;
    margin: 5px;
    padding: 5px;
  }
  @media (max-width: 789px) {
     display:block;
     font-size:13px;
    }
`;
