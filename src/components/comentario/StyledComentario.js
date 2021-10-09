import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 0 0 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
  padding: 0 .8rem 0;
  display: flex;
`;

export const Avatar = styled.img`
  margin-top:10px;
  max-width: 50px;
  max-height: 50px;
`;

export const Conteudo = styled.div`
    margin-top:10px;
    margin-left: 1rem;
    width: 100%;
    position: relative;
    box-shadow:none;
    h2 {
        font-size: 1rem;
        margin: .1rem 0 .1rem;
        color: #2d3748
    }
    p {
        color: #4a5568;
        margin: .5rem 0;
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        background: none;
        font-size: 1.5rem;
        &:hover {cursor: pointer;}
    }
`;

export const Data = styled.p`
    text-align: right;
    color: #718096;
    font-size: 10px;
`;

//inicio do style do icone das pag//
export const Span= styled.span`
    .tw-heart {
    background: url(http://i.imgur.com/zw8ahUb.png) no-repeat 0 0;
    left: 0px;
    top: 0px;}
    position: relative;
    width: 5rem;
    height: 5rem;
    display: block;


  [type="checkbox"]:checked + .tw-heart {
    transition: background .8s steps(28);
    background-position: -2800px 0;
    animation:ease;
  }

  [type="checkbox"] {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 85%;
    height: 85%;
    z-index: 1;
    margin: 0;
  }
`;
export const IconeLike = styled.span`
    display:flex;
    width: 100%;
    height: 100%;
`;