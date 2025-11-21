
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import QrCode from '../../assets/img/Code.jpg'
import Ancora from "../../components/Button/Ancora.jsx";
import Button from '../Button/Button.jsx';

const Modals = ({show, handleClose}) => {
  return (
   <>
      <Modal show={show} className='d-flex align-items-center justify-content-center flex-column'>
        <Modal.Header >
          <Modal.Title className='fw-bold'>Informações de contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row> 
               <p><span>Email: </span><Ancora onLink="mailto:fernandaborgesb4@gmail.com">fernandaborgesb4@gmail.com</Ancora> </p>
               
            </Row>
            <Row>
                <div className='d-flex flex-column'>
                    <div><span>WhatsApp:</span></div>
                    <div>
                        <img src={QrCode} alt="" style={{width:"300px"}} />
                        <p class="text-center"><span>Escaneie-me</span></p>
                    </div>
                </div>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button size="btn-contato" onClick={handleClose}>Fechar</Button>
        </Modal.Footer>
      </Modal>
      </>
);
};

export default Modals;