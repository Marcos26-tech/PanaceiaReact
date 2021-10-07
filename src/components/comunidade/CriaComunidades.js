import React, { Component } from 'react';
import Comunidades from './Comunidades'

import {Container, Button} from './StyledCriaComunidade';
class CriaComunidades extends Component {
  state = {
    comunidade: [
      {
        titulo: 'Saúde de Mulheres Depois dos 30 anos',
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

  adicionarComunidade = evento => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario}
    this.setState({
      comunidade: [...this.state.comunidade, novoComentario],
      novoComentario: { titulo: '', descricao: '' }
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comunidade;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comunidade: lista })
  }

  digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
  }

  render() {
    return (
      <Container >
        <h1>aqui vai o titulo da comunidade</h1>
        {this.state.comunidade.map((comentario, indice) => (
          <Comunidades
            key={indice}
            titulo={comentario.titulo}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.descricao}
          </Comunidades>
        ))}

        <form method="post" onSubmit={this.adicionarComunidade}>
          <div>
            <input
              type="text"
              name="titulo"
              value={this.state.novoComentario.titulo}
              onChange={this.digitacao}
              required
              placeholder="Digite o título da comunidade" />
          </div>
          <div>
            <textarea
              name="descricao"
              value={this.state.novoComentario.descricao}
              onChange={this.digitacao}
              required
              rows="4" 
              placeholder="Escreva uma pequena descrição sobre a comunidade..."/>
          </div>
          <Button type="submit">Criar Comunidade</Button>
        </form>
      </Container>
    );
  }
}

export default CriaComunidades;