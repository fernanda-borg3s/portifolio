import Container from "react-bootstrap/esm/Container";
import CardLayout from "../../components/Card/Card";
import Row from 'react-bootstrap/Row';
import GridLayout from "../../components/GridLayout/GridLayout";
import Col from 'react-bootstrap/Col';
import Button from "../../components/Button/Button";
import Perfil from '../../assets/img/Perfil.jpg';
import './Sobre.css'
import Footer from "../../components/Footer/Footer";
function Sobre(){
    return(
        <>
         <Container className="container-sobre">
            <Row className="mt-5 ajuste-grid">
                <Col className="col-6 ">
                    <GridLayout 
                    titulo="Sobre mim"
                   
                    mostrarImg='none-img'
                    >
                        <p style={{ textAlign:'justify', paddingRight:"10px"}}>
                        Sou uma desenvolvedora Web, com uma base sólida em desenvolvimento de interfaces interativas e responsivas, adquirida durante meus estudos acadêmicos e em experiências práticas. Recentemente, me graduei como Tecnólogo em Sistemas para Internet, além de possuir formação técnica em Desenvolvimento de Sistemas para Web. Tenho conhecimento em HTML, CSS, JavaScript, React, Node.js, PHP e etc, sempre buscando aplicar essas habilidades em soluções criativas e eficazes para o desenvolvimento web. Tenho facilidade em aprender e me adaptar rapidamente, e estou sempre em busca de novos desafios para aprimorar meus conhecimentos. Possuo curso avançado de inglês e tenho um entendimento e oralidade razoável da língua. Sou uma pessoa proativa, organizada e criativa, sempre trazendo uma abordagem inovadora para os projetos em que me envolvo. Estou pronta para contribuir com a equipe, buscando crescer profissionalmente e agregar valor aos projetos com meu comprometimento e dedicação.
                        </p>
                    </GridLayout>
                </Col>
                <Col className="profile d-flex align-items-center justify-content-center ms-3">
                   <img src={Perfil}/>
                </Col>
                <Col>
                    <GridLayout titulo="Formação"
                    
                     mostrarImg='none-img'
                    >
                        <div className="pt-2 pb-2 mt-2 mb-4">
                            <p className="fw-bold  mb-0 fs-5"><i class="bi bi-mortarboard-fill"> </i>
                         Tecnólogo em Sistema para Internet</p>
                        <p className="mb-0">Instituto Federal de Brasília(IFB)</p>
                        <p className="fw-light">03/2022 à 09/2024</p></div>
                        <div>
                        <p className="fw-bold mb-0 fs-5"><i class="bi bi-mortarboard-fill"> </i>
                        Técnico em Desenvolvimeto de Sistema para Web</p>
                        <p className="mb-0">Instituto Federal de Brasília(IFB)</p>
                        <p className="fw-light">02/2020 à 09/2021</p>
                        </div>
                        
                    </GridLayout>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <GridLayout titulo="Certificados"
                    
                    mostrarImg='none-img'
                    >
                        <div className="" style={{fontSize:'18px'}}>
                            <ul>
                                <li>EMAG DESENVOLVEDOR - Enap/2022</li>
                                <li>Introdução à Programação com a Linguagem Swift - IFB/2022</li>
                                <li>Inovando Com CSS - Fundação Bradesco/2022</li>
                                <li>Inglês Avançando - PWCursos/2018</li>
                                <li>Curso de Informática - PWCursos/2016</li>
                            </ul>
                        </div>
                        <div className="mt-5" style={{fontSize:'18px'}}>
                            <h1>Competências</h1>
                            <ul>
                                <li> Oralidade e escrita em inglês, com capacidade de leitura técnica razoável </li>
                                <li>Conhecimento de princípios e práticas de otimização de código.</li>
                                <li>Conhecimento em metodologias ágeis de desenvolvimento de software(Scrum e Kaban)</li>
                                <li>Noções básicas em Java, Swift, TypeScript e NextJS</li>
                                <li>Desenvolvimento Front-end</li>
                                <li> Capacidade de se adaptar às diversas situações</li>

                            </ul>
                        </div>
                    </GridLayout>
                </Col>
               
                
                <Col className="col-8 p-0 ">
                    <GridLayout titulo="Experiência Profissional"  mostrarImg='none-img'>
                    <div className="pt-2 pb-2">
                    <p className="fw-light  mb-0" style={{fontSize:"13px"}}> MAIO DE 2023 - JULHO DE 2024</p>
                        <p className="fw-bold  mb-0 fs-5">                            Desenvolvimento de Aplicativo Web - InovaIF</p>
                        <p className="mb-1">p/ o Instituto Federal de Brasília(IFB) - Curso Técnico em Eventos</p>
                        <p className="fw-light">
                            <ul>
                                <li>Utilização de tecnologias como JavaScript, React, Bootstrap, Express, Node.js, Axios e PostgreSQL para criar uma aplicação com arquitetura em camadas, seguindo metodologias ágeis de desenvolvimento de software;</li>
                                <li>Gerenciamento do código-fonte utilizando Git e GitHub para controle de versão e hospedagem em plataforma online;</li>
                                <li>Participação em todas as fases do projeto: análise de requisitos, modelagem do banco de dados, desenvolvimento front-end e back-end, testes e deploy da aplicação;</li>
                                <li>Implementação de funcionalidades para duas atrizes principais (professoras e alunas), permitindo cadastro de aulas, consultas e inscrições, com regras de negócio personalizadas conforme análise feita com a coordenação do curso.</li>
                            </ul>
                        </p>
                    </div>   
                    <div className="pt-2 pb-2">
                    <p className="fw-light  mb-0" style={{fontSize:"13px"}}>       JANEIRO DE 2023 - FEVEREIRO DE 2024</p>
                        <p className="fw-bold  mb-0 fs-5">                            Estagiária de Desenvolvimento Web</p>
                        <p className="mb-1">Instituto Nacional do Seguro Social (INSS)</p>
                        <p className="fw-light">
                            <ul>
                                <li>Manutenção de sistemas de controle e gestão de dados de infraestrutura do setor de
                                engenharia;</li>
                                <li> Contribuição no desenvolvimento de interfaces e automação de processos para o setor;</li>
                                <li>Utilização de tecnologias como JavaScript, PHP e PHPMyAdim;</li>
                                <li>Gerenciamento do código-fonte utilizando Git e GitLab.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="pt-1 pb-1">
                    <p className="fw-light  mb-0" style={{fontSize:"13px"}}> JANEIRO DE 2018 - DEZEMBRO DE 2018</p>
                        <p className="fw-bold  mb-0 fs-5">                            Estagiária de Suporte Administrativo</p>
                        <p className="mb-1">Tribunal de Justiça do Distrito Federal e Territórios (TJDFT)</p>
                        <p className="fw-light">
                            <ul>
                                <li>Atendimento ao cliente e suporte administrativo;</li>
                                <li>Organização, cadastro e digitalização de arquivos.</li>
                            </ul>
                        </p>
                    </div>
                    </GridLayout>
                </Col>
            </Row>
            <Footer/>
        </Container>
        </>
    )
}

export default Sobre;