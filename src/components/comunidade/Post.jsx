import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt as X } from 'react-icons/fa'


export const DivTarefa = styled.div`
    background-color: #ffb;
    border:2px solid #333;
    box-shadow:5px 5px 5px #333;
    padding:20px;
    text-align:center;
    width:350px;
    height:200px;
    margin:10px;
    
    h2,p{
        padding-bottom:10px;
    }
  
`

function Post(props) {
    return (
        <DivTarefa>
            <a href="#">{props.titulo}</a>
            <p>{props.setor}</p>
            <p>{props.descricao}</p>
            <span onClick={props.remove}><X /></span>
        </DivTarefa>
    )
}
export default Post;