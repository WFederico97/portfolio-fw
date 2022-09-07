import React, { useState } from "react";
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
            <Navbar variant="dark" className={colorChange ? 'headerColorChanged' : "header"} sticky="top" expand='lg'>

                <Navbar.Brand href="/" className=" d-flex col-12 mx-auto m-3" >
                    <div className={colorChange ? 'navbarTitleChanged col-4 text-center' : 'navbarTitle col-4 text-center'}>
                        <h3>Federico Wuthrich</h3>
                    </div>
                    <div className={colorChange ? 'headerLinkColorChanged  d-flex col-4 d-flex gap-3 mx-auto ' : 'navbarLinks d-flex col-4 d-flex gap-3 mx-auto'}>
                        <Nav.Link href="#about" className='aboutMeLink' >
                            <p>
                                {i18n.t('aboutNav')}
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#skills" className='skillsLink' >
                            <p>{i18n.t('skillsH3')}</p>
                        </Nav.Link>
                        <Nav.Link href="#proyects" className='proyectsLink'>
                            <p>{i18n.t('proyectsH3')}</p>
                        </Nav.Link>
                        <Nav.Link href="#contact" className='contactLink'>
                            <p>{i18n.t('contactH4')}</p>
                        </Nav.Link>
                    </div>
                    <div className="langs" opacity='1'>
                            <a href="es"><button> <img src="./Images/icons8-spain-48.png" alt="es" className="españolLang" /> </button></a>
                            <a href="en"><button> <img src="./Images/icons8-great-britain-48.png" alt="en" className="englishLang" /> </button></a>
                        </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
        </>

    )
}

export default Header