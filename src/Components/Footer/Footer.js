import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <Container fluid className="footerInfo ">
                <Row className=" justify-content-center mx-auto  col-6 d-flex p-1 ">
                    <Col className="col-3 footerText">
                        <h6>© 2022 Federico W. </h6>
                    </Col>
                    <hr />
                    <span  />
                    <Col className="col-2  ">
                        <img className="img-fluid " src="./Images/icons8-argentina-64.png" alt="arg icon" style={{width: '3em', height: '3em'}} />
                    </Col>
                </Row>
            </Container>
        </>


    )
}
export default Footer