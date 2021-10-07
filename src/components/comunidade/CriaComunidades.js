import React, { Component } from 'react';
import Comunidades from './Comunidades'

import {Container, Button} from './StyledCriaComunidade';


class CriaComunidades extends Component {
  state = {
    comentarios: [
      {
        titulo: 'Saúde de Mulheres depois dos 30 anos',
        descricao: 'Essa comunidade conversamos sobre as consultas médicas regulares o os exames indispensáveis, que todas as mulher com mais de 30 anos podem adotar como rotina.'
      },
      {
        titulo: 'Saúde Infantil',
        descricao: 'Nessa comunidade conversamos sobre a saúde dos nosso filhos de maniera compreensiva e educativa.'
      },
      {
        titulo: 'Saúde Mental',
        descricao: 'Aqui falamos sobre varios assuntos sobre como manter um nivel de qualidade de vida cognitiva e emocional.'
      },
    ],
    novoComentario: {
      titulo: '',
      descricao: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario}
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { titulo: '', descricao: '' }
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const { titulo, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [titulo]: value } })
  }

  render() {
    return (
      <Container >
        <h1>aqui vai o titulo da comunidade</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comunidades
            key={indice}
            titulo={comentario.titulo}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.descricao}
          </Comunidades>
        ))}

        <form method="post" onSubmit={this.adicionarComentario}>
          <div>
            <input
              type="text"
              name="titulo"
              value={this.state.novoComentario.titulo}
              onChange={this.digitacao}
              required
              placeholder="Título dessa Comunidade" />
          </div>
          <div>
            <textarea
              name="descricao"
              value={this.state.novoComentario.descricao}
              onChange={this.digitacao}
              required
              rows="4" 
              placeholder="Escreva uma descrição sobre a comunidade"/>
          </div>
          <Button type="submit">Criar Comunidade</Button>
        </form>
      </Container>
    );
  }
}
export default CriaComunidades;