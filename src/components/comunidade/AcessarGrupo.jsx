import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import FormPost from './FormPost';
import Post from './Post';

export const DivLista = styled.div`
  display: flex;
  width: 100%;
  min-height:85vh;
  padding:20px;
  background-color:#ccc;
  flex-wrap: wrap;
  justify-content: space-around;

`


const AcessarGrupo = () => {

   const [nTarefa, setnTarefa] = useState({
      titulo: '',
      setor: '',
      descricao: ''
  })
  const novaTarefa = {
      titulo: '',
      setor: '',
      descricao: ''
  }

  const [tarefa, setTarefa] = useState(
      [
        {
            titulo: '',
            setor: '',
            descricao: ''
        },
      ])

  const addTarefa = (e) => {
      e.preventDefault()
      setTarefa([...tarefa, nTarefa])
      setnTarefa({
          titulo: '',
          setor: '',
          descricao: ''
      })

  }

  const captura = (e) => {
      const { name, value } = e.target

      if (name === 'titulo') {
          setnTarefa({ 'titulo': value, 'setor': nTarefa.setor, 'descricao': nTarefa.descricao })
      } else if (name === 'setor') {
          setnTarefa({ 'titulo': nTarefa.titulo, 'setor': value, 'descricao': nTarefa.descricao })
      } else if (name === 'descricao') {
          setnTarefa({ 'titulo': nTarefa.titulo, 'setor': nTarefa.setor, 'descricao': value })
      }
  }

  const removerTarefa = (tar) => {
      let lista = tarefa
      lista = lista.filter(
          (t) =>
              t !== tar)
      setTarefa(lista)

  }


  return (
      <DivLista>
          <FormPost addTarefa={addTarefa} tarefa={nTarefa} digit={captura} />
          {tarefa.map(
              (tar, i) => (
                  <Post key={i}
                      titulo={tar.titulo}
                      setor={tar.setor}
                      descricao={tar.descricao}
                      remove={removerTarefa.bind(this, tar)}
                  />
              )
          )}
          <button onClick={addTarefa}>Adicionar Tarefa</button>
      </DivLista>
  )
}
export default AcessarGrupo;