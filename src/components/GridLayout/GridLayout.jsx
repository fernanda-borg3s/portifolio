import './GridLayout.css'
import Col from 'react-bootstrap/Col';
import { IMAGENS_ENDEREÇO } from '../../service.js';

function GridLayout({ titulo, texto, classBtn, classTxt, children, imgIcone, mostrarImg, ajusteH1 }){
    return(
        <>
        <div className={`colunas d-flex align-items-end ${mostrarImg}`}>
            <div className={`row mb-2 ${mostrarImg}`}>
            <img src={`${IMAGENS_ENDEREÇO}${imgIcone}`}/>
            </div>
            <div className='row w-100 '>
                <h1 className={`mt-2 ${ajusteH1}`}>{titulo}</h1>
                <div className={`texto-grid d-flex ${classTxt}`}>
                    <p >{texto}</p>
                    <div className={`${classBtn}`}>
                        {children}

                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default GridLayout;