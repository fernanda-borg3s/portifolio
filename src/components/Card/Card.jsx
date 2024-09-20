import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState} from 'react';

import { IMAGENS_ENDEREÇO } from '../../../service.js';
import './Card.css'
import Projetos from '../../../data.js'
import Ancora from '../Button/Ancora.jsx';

const imagens = '../../assets/img/'
function CardLayout(){
    const [projetos, setprojetos] = useState([]);

    useEffect(() => {
      setprojetos(Projetos);
      console.log(projetos)
     
    }, []); 

    const [expandedIndex, setExpandedIndex] = useState(-1);
        const toggleContent = (index) => {
            setExpandedIndex(expandedIndex === index ? -1 : index);
        };

    return(
        <>
    
        <Row lg={2} md={2} sm={1} className="g-4 mt-4">
        {projetos.sort((a, b) => b.id - a.id).map((project, index) => (
        <Col key={index}>
            <Card className='card-coluna'>
                <Card.Img variant="top" className='img-card' src={`${IMAGENS_ENDEREÇO}${project.img}`}/>
                <Card.Body>
                    <Card.Title className='d-flex align-items-center justify-content-between'>
                        <div>
                            <h1>{project.titulo}</h1>
                            <h2>{project.tecnologias}</h2>
                        </div>
                        <button className="btn-projeto" onClick={() => toggleContent(index)}>
                            {/* Se o card atual está expandido, o botão mostra "VER MENOS", caso contrário, "VER MAIS" */}
                            {expandedIndex === index ? "Ver menos" : "Ver mais"}
                        </button>
                    </Card.Title>
                        {/* Renderiza o texto do card apenas se ele estiver expandido */}
                    {expandedIndex === index && (
                        <div>
                            <Card.Text>{project.descricao}</Card.Text>
                            <div className='d-flex align-items-center justify-content-around'>
                            {Object.values(project.botoes).map((botao, index) => (
                                
                                <Ancora key={index} size='btn-projeto' onLink={botao.link}>{botao.label}</Ancora>
                               
                                ))}
                                 </div>
                            {/* {project.botoes.length === 1 ? 
                            <Button size="btn-projeto">{project.botoes.botao1}</Button>: 
                            <div className='d-flex align-items-center justify-content-around'>
                                <Button size="btn-projeto">{project.botoes.botao1}</Button>
                                <Button size="btn-projeto">{project.botoes.botao2}</Button>
                            </div>
                            } */}
                            
                        </div>
                    
                    )}
                </Card.Body>
            </Card>
        </Col>
    ))}
            
        </Row>
       
        
        </>
    )
}

export default CardLayout;