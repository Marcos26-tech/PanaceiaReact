import React from 'react'
import './AcessarGrupo.css'


export default function Componente() {

   return (
      <>

         <div className="coluna1 coluna">
            <div className="grupos">
               <div className="topo">
                  <h2>Alguns grupos que podem ser de seu interesse:</h2>
               </div>
               <div className="todo">

                  <div className="grupo">

                     <div className="interesse nutricao"></div>
                     <h3>Nutrição é vida</h3>
                     <li>Bons hábitos alimentares podem fazer maravilhas</li>
                     <div className="botao">
                        <button className="botaoCamp"><a href="depoimento.html">Entrar</a></button>
                     </div>

                  </div>
                  <div className="grupo">
                     <div className="interesse animais"></div>
                     <h3>Adote um Pet</h3>
                     <li>Além de companheiros, nossos melhores amigos</li>
                     <div className="botao">
                        <button className="botaoCamp"><a href="depoimento.html">Entrar</a></button>
                     </div>
                  </div>
                  <div className="grupo">
                     <div className="interesse relacionamento"></div>
                     <h3>Dicas de relacionamento</h3>
                     <li>Como ter relacionamentos melhores?</li>
                     <div className="botao">
                        <button className="botaoCamp"><a href="depoimento.html">Entrar</a></button>
                     </div>
                  </div>
               </div>
               <div className="todo">
                  <div className="grupo">
                     <div className="interesse artezanato"></div>
                     <h3>Artezanatos em casa</h3>
                     <li>Por que não aproveitar o que iria jogar fora e transformar em algo novo?</li>
                     <div className="botao">
                        <button className="botaoCamp"><a href="depoimento.html">Entrar</a></button>
                     </div>
                  </div>
                  <div className="grupo">
                     <div className="interesse culinaria"></div>
                     <h3>Dicas de Culinária</h3>
                     <li>Encontrar aqui todos os segredos culinarios e aprenda como fazer de um jeito simples!</li>
                     <div className="botao">
                        <button className="botaoCamp"><a href="depoimento.html">Entrar</a></button>
                     </div>
                  </div>
                  <div className="grupo">
                     <div className="interesse plantas"></div>
                     <h3>Mães de Plantas</h3>
                     <li>Por que não se tornar uma mãe de planta e deixar sua casa como um jardim?</li>
                     <div className="botao">
                        <button className="botaoCamp"><a href="depoimento.html">Entrar</a></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}