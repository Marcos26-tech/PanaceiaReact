import { React, useState } from 'react'
import { Container, FormButton } from '../../assets/style/StyleGlobal'
import { Span } from '../questionario/PageQuestionario'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


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
`;
export const ModalFooter = styled.div`
    padding: 10px;
`;



function PageInteresse() {

    const [show, setShow] = useState(false)

    const mostraModal = () => {
        setShow(!show)
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
                                <h4>Modal Title</h4>
                            </ModalHeader>
                            <ModalBody>
                                This is modal content(body)
                            </ModalBody>
                            <ModalFooter>
                                <button onClick={mostraModal}>Fechar</button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>}
                </div>
            </Container>

        </div>
    )
}

export default PageInteresse
