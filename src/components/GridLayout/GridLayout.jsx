import './GridLayout.css'
import Col from 'react-bootstrap/Col';


function GridLayout({ children, mostrarImg}){
    return(
        <>
        <div className={`colunas d-flex align-items-end ${mostrarImg}`}>
            {children}
        
        </div>
        </>
    )
}

export default GridLayout;