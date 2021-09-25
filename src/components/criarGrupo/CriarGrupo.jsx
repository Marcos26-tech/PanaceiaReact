import React from 'react'
import './CriarGrupo.css'

export default function CriarGrupo() {

    return (
        <div className="coluna coluna2">
            <h1>Que tal criar seu próprio grupo?</h1>
            <div className="criaEventos">
                <form action="#" method="get">
                    <div className="campo campoLabel">
                        <label for="idnmGrupo">O nome do grupo será:</label>
                        <input type="text" id="idnmGrupo" name="nmGp" className="entrada"
                            placeholder="Nome do Grupo" required
                            oninvalid="setCustomValidity('Esse campo deve ser preenchido para concluir a criação do grupo!')"
                            pattern="^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$"></input>
                    </div>
                    <div className="campo campoLabel">
                        <label for="idDescricao">Descrição do grupo : </label>
                        <input type="text" id="idDescricao" name="plGp" className="entrada"
                            placeholder="Escreva uma descrição sobre o grupo" required
                            oninvalid="setCustomValidity('Esse campo deve ser preenchido para concluir a criação do grupo!')"
                            pattern="^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$"></input>
                    </div>
                    <div className="campo campoLabel">
                        <label for="idInteressesGrupo">Para qual público é direcionado este grupo:</label>
                        <select name="itGp" id="idInteressesGrupo" className="entrada">
                            <option value="an">Animais</option>
                            <option value="ar">Artes</option>
                            <option value="bl">Beleza</option>
                            <option value="cl">Culinária</option>
                            <option value="pl">Plantas</option>
                        </select>
                    </div>
                    <div className="campo">
                        <label class="custom-file-upload"><input type="file"/>Clique aqui para adicionar a foto do grupo</label>

                    </div>
                    <div className="botao">
                        <button className="botaoCamp" id="idCriaGrupo">Criar Grupo</button>
                    </div>
                </form>
            </div>
        </div>
    )
}