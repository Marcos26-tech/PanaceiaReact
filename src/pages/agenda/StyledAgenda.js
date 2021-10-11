import styled from 'styled-components';

export const Container = styled.section`
  background: rgb(255, 255, 255);
  opacity:98%;
  border-radius: 4%;
  padding: 2rem 5rem 2rem;
  margin: 5rem 8% 2rem;
  height: 54rem;
  text-align: center;
  justify-content: center;
  div{
    margin: 0;
    padding: 0;
    min-width:320px;
    height:630px;   
  }
  h2{
  margin: 2px;
  padding: 2px;
  font-size:25px;
  font-weight: bold;
  color: rgb(12, 139, 1);
  text-align: center;
    @media (max-width: 789px) {
      font-size:15px;
      margin: 5px;
      padding: 5px;
    }
  }
  @media (max-width: 789px) {
    margin: 14.5rem 3% auto;
    padding:10px;
    height:50rem;
  }
`;





