import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import i18n from "../../i18n";



const Header = () => {
    const [colorChange, setColorChange] = useState(false);

    const ChangeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true)
        } else {
            setColorChange(false)
        }
    };

    window.addEventListener('scroll', ChangeNavbarColor)

    return (
        <>
            <Navbar variant="dark" className={colorChange ? 'headerColorChanged d-flex col-12 ' : "header d-flex col-12 "} sticky="top" expand='xl' >
                <Container fluid className="col-12 justify-content-center" >
                    <Navbar.Brand className=" d-flex justify-content-center col-lg-4 " >
                        <div className={colorChange ? 'navbarTitleChanged  col-lg-12' : 'navbarTitle  col-lg-12'}>
                            <Nav.Link href="#home"><h3>Federico Wuthrich</h3></Nav.Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="togglerBtn" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={colorChange ? 'headerLinkColorChanged d-flex col-lg-6 justify-content-center  ' : 'navbarLinks d-flex  col-lg-6 justify-content-center     '} >
                            <Nav.Link href="#about" className='navbarLinks' >
                                <p>
                                    {i18n.t('aboutNav')}
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#skills" className='navbarLinks' >
                                <p>{i18n.t('skillsH3')}</p>
                            </Nav.Link>
                            <Nav.Link href="#proyects" className='navbarLinks'>
                                <p>{i18n.t('proyectsH3')}</p>
                            </Nav.Link>
                            <Nav.Link href="#contact" className='navbarLinks'>
                                <p>{i18n.t('contactH4')}</p>
                            </Nav.Link>
                        </Nav>
                        <Nav className="col-lg-6 justify-content-center">
                        <div className="langs justify-content-center " opacity='1'>
                                <a href="es"><button> <img src="./Images/icons8-spain-48.png" alt="es" className=" img-fluid españolLang" /> </button></a>
                                <a href="en"><button> <img src="./Images/icons8-great-britain-48.png" alt="en" className=" img-fluid englishLang" /> </button></a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>


                </Container>

            </Navbar>
        </>

    )
}

export default Header