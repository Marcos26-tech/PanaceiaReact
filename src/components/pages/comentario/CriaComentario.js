import React, { Component } from 'react';

import './css/Comentario.css'

import Comentario from './Comentario';

class CriaComentario extends Component {

  state = {
    comentarios: [
      {
        nome: 'Rafael',
        data: new Date(2020, 3, 19, 17, 30, 0),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Pedro',
        data: new Date(2020, 3, 22, 12, 15, 0),
        mensagem: 'Olá, tudo bem. E você?'
      }
    ],
    novoComentario: {
      nome: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, data: new Date() }
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', mensagem: '' }
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
  }

  render() {
    return (
      <div className="App">
        <h1>aqui vai o nome da comunidade</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder="Digite seu nome" />
          </div>
          <div>
            <textarea
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              required
              rows="4" 
              placeholder="Escreva um comentário..."/>
          </div>
          <button type="submit">Publicar</button>
        </form>
      </div>
    );
  }
}

export default CriaComentario;