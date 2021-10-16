import { React, useEffect, useState } from 'react';
import Comentario from '../../components/comentario/Comentario';

import { Container, Button } from '../../assets/style/StyleComunidadeGlobal';


function PageComentarios (props) {

    let id = "";

    if (props.match.path.toLowerCase().includes("depo")) {
        id = props.match.params.id
    }

    // MÉTODO GET
    const [depoimentos, setDepoimentos] = useState([])

    
    useEffect(() => {
        fetch("/rest/brief").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setDepoimentos(resp)
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }, [])


  //   const adicionarComentario = evento => {
  //   evento.preventDefault();
  //   const novoComentario = { ...this.state.novoComentario, data: new Date() }
  //   this.setState({
  //     comentarios: [...this.state.comentarios, novoComentario],
  //     novoComentario: { nome: '', mensagem: '' }
  //   })
  // }

  const removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  const digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
  }

  const testa = () => {
    alert("Esse é o id: " + id)
  }

  return (
      <Container >
        <h1>Depoimentos da comunidade</h1>
        {depoimentos.map((depoimento) => (
          <Comentario
            key={depoimento.id}
            idComunidade={id}
            idDepoimento={depoimento.idComunidade}
            nome={id == depoimento.idComunidade ? depoimento.titulo : null}
            comentario={id == depoimento.idComunidade ? depoimento.comentario : null}
            onRemove={removerComentario.bind(this, depoimento.id)}>
            {id == depoimento.idComunidade ? depoimento.comentario : null}
          </Comentario>
        ))}

        <form onSubmit="">
          <div>
            <h3>Compartilhe um depoimento com a comunidade</h3>
            <input
              type="text"
              name="nome"
              value={depoimentos.titulo}
              onChange={digitacao}
              required
              placeholder="Digite seu nome" />
          </div>
          <div>
            <textarea
              name="mensagem"
              value={depoimentos.mensagem}
              onChange={digitacao}
              required
              rows="4"
              placeholder="Escreva seu depoimento..." />
          </div>
          <Button type="submit">Publicar Comentário</Button>
          <button onClick={testa}>TESTA !!!! </button>
        </form>
      </Container>
    );
  }

export default PageComentarios;