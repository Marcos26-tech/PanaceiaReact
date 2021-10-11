import styled from "styled-components";

//inicio style da pagina home//
export const Container = styled.section`
  background: rgb(255, 255, 255);
  opacity:98%;
  border-radius: 4%;
  padding: 2rem 5rem 2rem;
  margin: 5rem 8% 2rem;
  height: 54rem;
  text-align: center;
  justify-content: center;
  @media (max-width: 789px) {
    margin: 14.5rem 3% auto;
    padding:10px;
    height:42rem;
  }
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
  margin: 10px;
  padding: 10px;
  font-size:35px;
  font-weight: bold;
  color: rgb(12, 139, 1);
  text-align: center;
  justify-content: center;
  @media (max-width: 789px) {
    font-size:15px;
  }
`;

export const StyledContainer = styled.section`
  display: flex;
`;

//inicio style da pagina carrocel//
export const StyledCarrocelContainer = styled.div`
  height: 40rem;
  width: 100%;
  padding: 0 20px 0;
  margin: 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 789px) {
    display: flex;
    width: 100%;
    margin: 2px;
    padding:2px;
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
    background-color: rgb(112, 241, 112);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
  @media (max-width: 789px) {
    width: 100%;
    height: 80%;
  }
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 234, 0);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
