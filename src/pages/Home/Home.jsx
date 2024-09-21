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
import ImgProjetos from '../../assets/img/Pages.png'
import ImgAvatar from '../../assets/img/Avatar.png'
import './Home.css'


function Home(){

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    return(
        <>
        <Container>
            <Row className="mt-5">
                <Col className="col-6">
                    <GridLayout >
                        <div className='row w-100 d-flex flex-colum'>
                            <h1 className=''>Olá, eu sou a Fernanda</h1>
                            <div className=''>
                                <p >Sou uma desenvolvedora web, em busca de oportunidades para expandir meus conhecimentos e crescer profissionalmente. Sinta-se à vontade para explorar e me conhecer melhor!</p>
                                <div className=''>
                                <a className="btn-contato" href="/FernandaBorgesCurriculo.pdf" download="Curriculo-FernandaBorges.pdf" type="application/pdf" style={{width: '150px'}}>Baixar currículo</a>
                                </div>                               
                            </div>                         
                        </div>
                       
                    </GridLayout>
                </Col>
                <Col>
                    <GridLayout mostrarImg='block-img' >
                         <div className='row mb-2 d-flex justify-content-end'>
                         <img src={ImgProjetos} style={{width:'150px'}}/>
                        </div>
                        <div className='row w-100'>
                        <h1 className='mt-2'>Meus Projetos</h1>
                        <div className='texto-grid d-flex justify-content-between align-items-center'>
                            <p >EXPLORAR</p>
                            <div className=''>
                            <Ancora size='arrow-right' onLink='/projetos'>
                            <i className="bi bi-chevron-right"></i>
                            </Ancora>
                            </div>          
                        </div>                        
                    </div>
                        
                    </GridLayout>
                </Col>
                <Col>
                    <GridLayout  mostrarImg='block-img' >
                         <div className='row' >
                         <img src={ImgAvatar} style={{width:'130px'}} />
                        </div>
                        <div className='row w-100 '>
                        <h1 className='mt-2'>Sobre</h1>
                        <div className='texto-grid d-flex justify-content-between align-items-center'>
                            <p >EXPLORAR</p>
                            <div className=''>
                            <Ancora size='arrow-right' onLink='/sobre'>
                            <i className="bi bi-chevron-right"></i>
                            </Ancora>
                            </div>          
                        </div>                        
                    </div>
                         
                    </GridLayout>
                </Col>
            </Row>
            <Row className="mt-4 row-2-home">
                <Col> 
                    <GridLayout>
                        <div className='row w-100 d-flex flex-colum '>
                            <h1 className=''>Falar comigo</h1>
                            <div className=''>
                                <p >Interessado no meu trabalho? Entre em contato e vamos conversar</p>
                                <div className=''>
                                <Button size='btn-contato' onClick={handleShow}>Contato</Button>
                                </div>                               
                            </div>                         
                        </div>
                        
                    </GridLayout>
                    
                </Col>
                <Col className="col-particula">
                    
                        <Particle ></Particle>
                  
                </Col>
                <Col className="col-6">
                    <GridLayout >
                          <div className='row w-100 '>
                            <h1 className=''>Habilidades</h1>
                            <div className='texto-grid d-flex'>
                            
                                <div className='div-inside-skills'>
                                <p className="p-2 fs-5">HTML & CSS  /  JavaScript  /  PHP / React / JQuery / Bootstrap / Node.js / Vite / PHPMyAdmin / MySQL / PostgreSQL </p>
                                </div>                               
                            </div>                         
                        </div>
                       
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