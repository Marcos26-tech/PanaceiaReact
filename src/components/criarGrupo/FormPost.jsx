import React from 'react'
import styled from 'styled-components';

const DivForm = styled.div`
    width: 100%;
    padding:20px;
    background-color: #1917;
    border-radius:3px;
    font-family:trebuchet-bold, sans-serif;
    font-size:1.5rem;
    form {


        input,textarea {
            padding:5px;
            width:50vw;
            max-width:80vw;
            border-radius:3px;
        }
        
        textarea {
         height:5vh;         
        }
        
        button {
            border-radius:5px;
            padding:1vh 1vw;
            background-color: #3c3ccc;
            color: #fff;
        }

    }


`

function FormPost(props) {
    return (
        <DivForm>
            <form method="post" onSubmit={props.addTarefa}>
                <div>
                    <input type="text" name="titulo" placeholder="Título desse post" value={props.tarefa.titulo} onChange={props.digit} />
                </div>
                <div>
                    <input type="text" name="setor" placeholder="Comunidade" value={props.tarefa.setor} onChange={props.digit} />
                </div>
                <div>
                    <textarea name="descricao" cols="30" rows="10" placeholder="Descrição" value={props.tarefa.descricao} onChange={props.digit}></textarea>
                </div>
                <div>
                    <button type="submit">Publicar</button>
                </div>
            </form>
        </DivForm>
    )
}
export default FormPost;