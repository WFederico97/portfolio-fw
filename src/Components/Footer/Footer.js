import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <Container fluid className="footerInfo ">
                <Row className=" justify-content-center mx-auto  col-12 d-flex p-1 ">
                    <Col className="col-12 imgFooter">
                        <img src="./Images/Banner-de-LinkedIn-FW.png" alt="fw banner" className="img-fluid banner"  />
                    </Col>
                    <hr />
                    <span />
                    <Col className="col-6 footerText  ">
                        <h6>© 2022 Federico W. </h6>
                        <a href="#about"><img className="img-fluid " src="./Images/icons8-argentina-64.png" alt="arg icon" style={{ width: '10%', height: '5em' }} /></a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer