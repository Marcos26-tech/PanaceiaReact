import React from 'react';
import {Container, Avatar, Conteudo} from './StyleComunidade';


import imagemComunidade from '../../assets/img/imgcomunidade/mulheres.jpg';

const Comunidades = props => {
 
    return (
        <Container>
            <Avatar src={imagemComunidade} alt={props.nome} />
            <Conteudo>
                <h2>{props.titulo}</h2>
                <p>{props.children}</p>
                <button onClick={props.onRemove}>&times;</button>
            </Conteudo>
        </Container>
    );
}

export default Comunidades;