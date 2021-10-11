import { React, useState } from 'react'
import { Container, FormButton } from '../../assets/style/StyleGlobal'
import { Span } from '../questionario/PageQuestionario'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import dog from '../../assets/img/dog.jpg'
import cat from '../../assets/img/cat.jpg'
import yoga from '../../assets/img/yoga.jpg'

export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0 ,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    width: 750px;
    background-color: #fff;
`;

export const ModalHeader = styled.div`
    padding: 10px;
`;

export const ModalTitle = styled.div`
    margin: 0;
`;

export const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    max-height: calc(100vh - 210px);
    overflow-y: auto;
`;
export const ModalFooter = styled.div`
    padding: 10px;
`;

export const CheckImg = styled.div`
    label {
    border: 1px solid #fff;
    padding: 10px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    }

    label img {
    height: 100px;
    width: 100px;
    }
`;





function PageInteresse() {

    const [show, setShow] = useState(false)

    const mostraModal = () => {
        setShow(!show)
    }

    const salvarInteresses = () => {

        alert("Interesses salvos com sucesso!")
        window.location.replace('./Comunidades')

    }



    return (
        <div>
            <Container>
                <Span>
                    <div>
                        <h1>Interesses - Panace.IA</h1>
                        <h3>Você deseja selecionar seus interesses agora?</h3>
                        <p>(Se preferir, poderá selecionar mais tarde a qualquer momento)</p>
                        <div>
                            <FormButton onClick={mostraModal}>Desejo selecionar meus interesses</FormButton>
                        </div>
                        <div>
                            <Link title="Comunidades" to="/Comunidades">Quero selecionar mais tarde</Link>
                        </div>
                    </div>
                </Span>
                <div>
                    {show && <Modal>
                        <ModalContent>
                            <ModalHeader>
                                <Span><h1>Meus Interesses</h1>
                                    <h3>Selecione as imagens que mais têm a ver com seus interesses:</h3>
                                </Span>

                            </ModalHeader>
                            <ModalBody>
                                <CheckImg>
                                    <input type="checkbox" class="checkbox1" />
                                    <label for="checkbox1">Cachorros<img src={dog} /></label>
                                    <input type="checkbox" class="checkbox2" />
                                    <label for="checkbox2">Gatos<img src={cat} /></label>
                                    <input type="checkbox" class="checkbox3" />
                                    <label for="checkbox3">Meditação<img src={yoga} /></label>
                                    <input type="checkbox" class="checkbox4" />
                                    <label for="checkbox4">Meditação<img src={yoga} /></label>
                                    <input type="checkbox" class="checkbox5" />
                                    <label for="checkbox5">Meditação<img src={yoga} /></label>
                                    <input type="checkbox" class="checkbox6" />
                                    <label for="checkbox6">Meditação<img src={yoga} /></label>
                                    <input type="checkbox" class="checkbox7" />
                                    <label for="checkbox7">Meditação<img src={yoga} /></label>
                                    <input type="checkbox" class="checkbox8" />
                                    <label for="checkbox8">Meditação<img src={yoga} /></label>

                                </CheckImg>
                            </ModalBody>
                            <ModalFooter>
                                <FormButton onClick={salvarInteresses}>Salvar </FormButton>
                                <button onClick={mostraModal}>Voltar</button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>}
                </div>
            </Container>

        </div>
    )
}

export default PageInteresse
