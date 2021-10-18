import { React, useState } from 'react'
import { Container, FormButton } from '../../assets/style/StyleGlobal'
import { Span } from '../../assets/style/StyleGlobal'
import { Link } from 'react-router-dom';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalFooter, CheckImg } from '../../assets/style/StyleModal';
import dog from '../../assets/img/imginteresses/dog.jpg'
import cat from '../../assets/img/imginteresses/cat.jpg'
import yoga from '../../assets/img/imginteresses/yoga.jpg'
import familia from '../../assets/img/imginteresses/familia.jpg'
import espiritualidade from '../../assets/img/imginteresses/espiritualidade.jpg'
import estudos from '../../assets/img/imginteresses/estudos.jpg'
import lutas from '../../assets/img/imginteresses/lutas.jpg'
import tecnologia from '../../assets/img/imginteresses/tecnologia.jpg'



function PageInteresse() {

    const [show, setShow] = useState(false)

    const mostraModal = () => {
        setShow(!show)
    }

    const salvarInteresses = () => {
        var listaInteresses = []

        for (let i = 0; i < 8; i++) {
            if (document.querySelectorAll('input')[i].checked) {
                var interesse = document.querySelectorAll('input')[i]
                listaInteresses.push(interesse.name)
            }
        }

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
                                    <input type="checkbox" id="checkbox1" name="cachorros" />
                                    <label for="checkbox1">Cachorros<img src={dog} alt="cachorros" /></label>
                                    <input type="checkbox" id="checkbox2" name="gatos" />
                                    <label for="checkbox2">Gatos<img src={cat} alt="gatos" /></label>
                                    <input type="checkbox" id="checkbox3" name="yoga" />
                                    <label for="checkbox3">Meditação<img src={yoga} alt="yoga" /></label>
                                    <input type="checkbox" id="checkbox4" name="estudos" />
                                    <label for="checkbox4">Estudos<img src={estudos} alt="estudos" /></label>
                                    <input type="checkbox" id="checkbox5" name="tecnologia" />
                                    <label for="checkbox5">Tecnologia<img src={tecnologia} alt="tecnologia" /></label>
                                    <input type="checkbox" id="checkbox6" name="lutas" />
                                    <label for="checkbox6">Lutas<img src={lutas} alt="lutas" /></label>
                                    <input type="checkbox" id="checkbox7" name="espiritualidade" />
                                    <label for="checkbox7">Espiritualidade<img src={espiritualidade} alt="espiritualidade" /></label>
                                    <input type="checkbox" id="checkbox8" name="familia" />
                                    <label for="checkbox8">Família<img src={familia} alt="familia" /></label>

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
