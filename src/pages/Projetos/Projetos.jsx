import Container from "react-bootstrap/esm/Container";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardLayout from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

function Projetos(){
    return(
        <>
            <Container>
              <CardLayout></CardLayout>
              <Footer/>
            </Container>
        </>
    )
}

export default Projetos;