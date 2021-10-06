import React, { Component } from 'react';
import './Component.css';

import MostraComentario from './Comentario'

class Comentario extends Component {

  state = {
    comentarios: [
      {
        nome: 'Rafael',
        email: 'rafael@mail.com',
        data: new Date(2020, 3, 19, 17, 30, 0),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Pedro',
        email: 'pedro@mail.com',
        data: new Date(2020, 3, 22, 12, 15, 0),
        mensagem: 'Olá, tudo bem. E você?'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, data: new Date() }
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' }
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
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <MostraComentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </MostraComentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar Comentário</h2>
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
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder="Digite seu email" />
          </div>
          <div>
            <textarea
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              required
              rows="4" />
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default Comentario;