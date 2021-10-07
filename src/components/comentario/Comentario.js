import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {Container, Avatar, Conteudo, Data} from '../../assets/styles/StyledComentario'

import imagemUsuario from '../../../assets/img/usuario.png';

const Comentario = props => {
 
    return (
        <Container>
            <Avatar src={imagemUsuario} alt={props.nome} />
            <Conteudo>
                <h2>{props.nome}</h2>
                <p>{props.children}</p>
                <Data>{formatRelative(props.data, new Date(),{ locale: ptBR })}</Data>
                <button onClick={props.onRemove}>&times;</button>
            </Conteudo>
        </Container>
    );
}

export default Comentario;