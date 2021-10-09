import React, { Component } from 'react';
import Comunidades from '../../components/comunidade/Comunidades';
import {Container, Button} from '../../components/comunidade/StyledPageComunidade';

class PageComunidades extends Component {
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
    novaComunidade: {
      titulo: '',
      imagem:'',
      descricao: ''
    }
  }

  adicionarComunidade = evento => {
    evento.preventDefault();
    const novaComunidade = { ...this.state.novaComunidade}
    this.setState({
      comunidade: [...this.state.comunidade, novaComunidade],
      novaComunidade: { titulo: '', imagem:'', descricao: '' }
    })
  }

  removerComunidade = comentario => {
    let lista = this.state.comunidade;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comunidade: lista })
  }

  digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({ novaComunidade: { ...this.state.novaComunidade, [name]: value } })
  }

 
  render() {
    return (
      <Container >
        <h1>“ Encontre sua terapia, domine a causa, porque você só melhora se sair do ponto onde se encontra! by Grupo Panaceia ”</h1>
        {this.state.comunidade.map((comentario, indice) => (
          <Comunidades
            key={indice}
            titulo={comentario.titulo}
            imagem={comentario.imagem}
            onRemove={this.removerComunidade.bind(this, comentario)}>
            {comentario.descricao}
          </Comunidades>
        ))}

        <form method="post" onSubmit={this.adicionarComunidade}>
          <div>
            <input
              type="text"
              name="titulo"
              value={this.state.novaComunidade.titulo}
              onChange={this.digitacao}
              required
              placeholder="Digite o título da comunidade" />
          </div>
          <div>
            <input
              type="file"
              name="imagem"
              value={this.state.novaComunidade.titulo}
              onChange={this.digitacao}/>
          </div>
          <div>
            <textarea
              name="descricao"
              value={this.state.novaComunidade.descricao}
              onChange={this.digitacao}
              rows="4" 
              placeholder="Escreva uma pequena descrição sobre a comunidade..."/>
          </div>
          <Button type="submit">Criar Comunidade</Button>
        </form>
      </Container>
    );
  }
 
}



export default PageComunidades;