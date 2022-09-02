import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './Header.css'


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="header" sticky="top">
                <Navbar.Brand href="/" className="headerChild d-flex col-12 mx-auto m-3" >
                    <div className="navbarTitle col-6 text-center">
                        <h3>Federico Wuthrich</h3>
                    </div>
                    <div className="navbarLinks col-6 d-flex gap-3 mx-auto">
                        <Nav.Link as={Link} to={'#about'} className='aboutMeLink' >
                            <p>
                                Sobre Mi
                            </p>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'#skills'} className='skillsLink' >
                            <p>Skills</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'#proyects'} className='proyectsLink'>
                            <p>Proyectos</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to={'#contact'} className='contactLink'>
                            <p>Contacto</p>
                        </Nav.Link>
                    </div>
                </Navbar.Brand>
            </Navbar>
        </>

    )
}

export default Header