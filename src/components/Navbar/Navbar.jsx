import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IMAGENS_ENDEREÇO } from '../../service.js'
import './Navbar.css';

function NavbarHome(){
    const [activeLink, setactiveLink] = useState('/')
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState(null);
    const handleMouseEnter = (link) => {
        setHoveredLink(link);
      };
    
      const handleMouseLeave = () => {
        setHoveredLink(null);
      };
    useEffect(() => {
        setactiveLink(location.pathname)
    }, [location]);

    const getBackgroundPosition = () => {
        const link = hoveredLink || activeLink;
        switch (link) {
          case "/":
            return "16.5%";
          case "/projetos":
            return "24%";
          case "/sobre":
            return "32%";
          default:
            return "17%";
        }
      };
    return(
    <>
        <Navbar className="bg-body-tertiary nav-container mt-3">
            <Container className="nav-container">
           
                <Nav className="me-auto nav-global" >
                <div className="background" style={{ left: getBackgroundPosition() }}></div>
                    <Nav.Link href="/" className={activeLink == '/' ? 'active' : ''}
                    onMouseEnter={() => handleMouseEnter("/")}
                    onMouseLeave={handleMouseLeave}
                    
                    >Home</Nav.Link>
                    <Nav.Link href="/projetos"  className={activeLink == '/projetos' ? 'active' : ''}
                     onMouseEnter={() => handleMouseEnter("/projetos")}
                     onMouseLeave={handleMouseLeave}                   
                     >Projetos</Nav.Link>
                    <Nav.Link href="/sobre"  className={activeLink == '/sobre' ? 'active' : ''}
                    onMouseEnter={() => handleMouseEnter("/sobre")}
                    onMouseLeave={handleMouseLeave}
                    >Sobre</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className="rede-social d-flex ">
                        <a href="https://github.com/fernanda-borg3s" target="_blank">
                            <img src={`${IMAGENS_ENDEREÇO}Github.png`}/>
                          
                        </a>
                        <a href="https://www.instagram.com/fernandab_code/" target="_blank">
                            
                            <i className="bi bi-instagram"></i>

                        </a>
                        <a href="https://www.linkedin.com/in/fernanda-borges133/" target="_blank">
                        
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://codepen.io/fernanda-borg3s" target="_blank">
                            <img src={`${IMAGENS_ENDEREÇO}Codepen.png`} />
                        
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    <Outlet/>
    </>
    )
}
export default NavbarHome;