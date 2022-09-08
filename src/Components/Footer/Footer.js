import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <Container fluid className="footerInfo">
                <Row>
                    <Col className="imgFooter">
                        <img src="./Images/Banner-de-LinkedIn-FW.png" alt="fw banner" className="img-fluid banner"  />
                    </Col>
                    <hr />
                    <span />
                    <Col className="footerText">
                        <h6>© 2022 Federico W. </h6>
                        <a href="#about"><img className="img-fluid " src="./Images/icons8-argentina-64.png" alt="arg icon" /></a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer