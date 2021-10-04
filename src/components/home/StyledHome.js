import styled from "styled-components";

//inicio style da pagina home//
export const Stylediv = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 4%;
  margin: 5rem 8% 2rem;
  text-align: center;
  justify-content: center;
`;

export const Section = styled.section`
  margin: 2px 10px 10px;
  padding: 2px;
  text-align: center;
  justify-content: center;
  h3 {
    font-weight: bold;
    color: rgb(12, 139, 1);
    text-align: center;
    margin: 2px;
  }
`;
export const Title = styled.h1`
  margin: 1rem;
  padding: 10px;
  font-weight: bold;
  color: rgb(12, 139, 1);
  display: flex;
  text-align: center;
  justify-content: center;
  @media (max-width: 780px) {
    width: 100%;
    padding-top: 13rem;
  }
`;

export const StyledContainer = styled.section`
  display: flex;
`;

//inicio style da pagina carrocel//
export const StyledCarrocelContainer = styled.div`
  height: 40rem;
  width: 50rem;
  padding: 0;
  padding-left: 4rem;
  padding-bottom: 6.5rem;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    display: flex;
    width: 100%;
    margin: auto;
    padding: 5px;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledArrowContainer = styled.div`
  font-size: 35px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;
