import { useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import GridLayout from "../../components/GridLayout/GridLayout";
import Col from 'react-bootstrap/Col';
import Button from "../../components/Button/Button.jsx";
import Ancora from "../../components/Button/Ancora.jsx";
import Footer from "../../components/Footer/Footer";
import Particle from "../../components/Particles/Particles";
import Modals from '../../components/Modals/Modals';
// import Curriculo from '../../../public'


function Home(){
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    // const handleOpenModal = () => {
    //     setIsOpen(true);
    //     console.log(isOpen)
    // };

    // const handleCloseModal = () => {
    //     setIsOpen(false);
    //     console.log(isOpen)

    // };
    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Container>
            <Row className="mt-5">
                <Col className="col-6">
                    <GridLayout 
                    titulo="Olá, eu sou a Fernanda"
                   
                    texto="Sou uma desenvolvedora web, em busca de oportunidades para expandir meus conhecimentos e crescer profissionalmente. Sinta-se à vontade para explorar e me conhecer melhor!"
                    mostrarImg='none-img'
                     classTxt='contact-text'
                    >
                        <a className="btn-contato" href="/FernandaBorgesCurriculo.pdf" download="Curriculo-FernandaBorges.pdf" type="application/pdf" style={{width: '150px'}}>Baixar currículo</a>
                    </GridLayout>
                </Col>
                <Col>
                    <GridLayout titulo="Meus projetos" 
                    texto="EXPLORAR"
                    classTxt='block-text'
                    mostrarImg='block-img'
                    imgIcone='Pages.png'
                    ajusteH1='ajusteh1 mt-4'>
                        <Ancora size='arrow-right' onLink='/projetos'>
                            <i className="bi bi-chevron-right"></i>
                        </Ancora>
                    </GridLayout>
                </Col>
                <Col>
                    <GridLayout titulo="Sobre"
                    texto="EXPLORAR"
                    classTxt='block-text'
                    mostrarImg='block-img'
                    imgIcone='Avatar.png'
                    ajusteH1='ajusteh1'
                    >
                         <Ancora size='arrow-right' onLink='/sobre'>
                            <i className="bi bi-chevron-right"></i>
                        </Ancora>
                    </GridLayout>
                </Col>
            </Row>
            <Row className="mt-4 row-2-home">
                <Col> 
                    <GridLayout titulo="Falar comigo"
                    classBtn='div-btn-contato'
                    texto='Interessado no meu trabalho? Entre em contato e vamos conversar'
                    classTxt='contact-text'
                     mostrarImg='none-img'
                    >
                        <Button size='btn-contato' onClick={handleShow}>Contato</Button>
                    </GridLayout>
                    
                </Col>
                <Col className="col-particula">
                    
                        <Particle ></Particle>
                  
                </Col>
                <Col className="col-6">
                    <GridLayout 
                    titulo="Habilidades" 
                    classBtn='div-inside-skills'
                    mostrarImg='none-img'>
                        <p className="p-2 fs-5">HTML & CSS  /  JavaScript  /  PHP / React / JQuery / Bootstrap / Node.js / Vite / PHPMyAdmin / MySQL / PostgreSQL </p>
                    </GridLayout>
                </Col>
            </Row>
         
            <Footer/>
            <Modals show={show} handleClose={() => setShow(false)}/>
        </Container>
      

        </>
    )
}

export default Home;