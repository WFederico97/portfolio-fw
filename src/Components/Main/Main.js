import React from "react";
import './Main.css'
import { MdWavingHand } from "react-icons/md";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import { BsCloudDownload } from 'react-icons/bs'
import CarouselPortfolio from "../Carousels/CarouselPortfolio/CarouselPortfolio";

const Main = () => {
    return (
        <>
            {/*Home*/}
            <div className="homeSection text-center">
                <h3 className="homeSectionTitle">
                    <MdWavingHand className="mdIcon" /> {'{'}Hola Mundo , soy Federico Wuthrich
                    <p className="homeSectionParagraph">
                        desarrollador Front End {'}'}
                    </p>
                </h3>
                <br />

                <img className="mainBg img-fluid" src="./Images/nyBackground.jpg" alt="nyc skyline" />
            </div>

            {/* ABOUT ME */}

            <section id="about">
                <Container fluid className="about m-0">
                    <Card className="cardAbout">
                        <header className="cardTitle">
                            <h3 className="aboutH1">Federico Wuthrich |</h3> <p className="aboutP">Desarrollador Front End React |</p> <hr />
                        </header>
                        <body className="cardBody">
                            <p className="aboutP">Este es mi portfolio,
                                tengo 25 años y soy de Córdoba capital, Argentina.

                                Durante los comienzos de enero del 2022, tomé la decision de sumergirme en el mundo de las IT, por curiosidad , por el "boca en boca" de amigos, allegados y familiares.
                                Hasta el dia de la fecha , he realizado tres cursos que conforman la carrera de <strong>Desarrollo Front End React</strong> la cual se encuentra compuesta por un curso de Desarrollo Web
                                con una carga horaria de 34 horas en 9 semanas, un curso de Programacion Javascript con 38 horas en 10 semanas y por ultimo un curso de React js con la misma carga horaria que el anterior.
                                Actualmente me encuentro en busqueda laboral activa tanto para trabajar en forma remota como presencial / híbrida.
                                Tambien aspiro a seguir formandome en el rubro , actualmente estoy buscando formarme en el area de backend con cursos de la plataforma Udemy
                            </p>
                            <div className="certBtns gap-3 col-6 mx-auto d-flex">
                                <a href="https://drive.google.com/file/d/1y_UlFvRtI_t4Xgs5txLQ9aRtAHYucgwx/view?usp=sharing" target={"_blank"} rel='noreferrer' ><button className="cvDownloadBtn">Descargar CV <BsCloudDownload /> </button></a>
                                <a href="https://www.coderhouse.com/certificados/62313533579172004be63618" target={"_blank"} rel='noreferrer' ><button className="dwDownloadBtn">Certificado Desarrollo Web <BsCloudDownload /> </button></a>
                                <a href="https://www.coderhouse.com/certificados/62a100e95bd8d6001973b015" target={"_blank"} rel='noreferrer' ><button className="jsDownloadBtn">Certificado Javascript <BsCloudDownload /> </button></a>
                                <a href="https://www.efset.org/cert/f7M1H3" target={"_blank"} rel='noreferrer' ><button className="efDownloadBtn">Certificado Ingles C1 <BsCloudDownload /> </button></a>
                                
                            </div>
                        </body>
                    </Card>
                </Container>
            </section>

            {/* SKILLS SECTION */}

            <section id="skills">
                <Container fluid className="  skills col-12 d-flex row justify-content-center m-0 ">
                    <div className="skillsHead col-6 ">
                        <h3>Skills</h3>
                    </div>
                    <hr />
                    <div className="skillsBody row col-6 justify-content-center mb-4">
                        <img src="./Images/icons8-html-5.svg" alt="html 5 icon" ></img>
                        <img src="./Images/icons8-css3.svg" alt="css 3  icon"></img>
                        <img src="./Images/icons8-javascript.svg" alt="javascript icon"></img>
                        <img src="./Images/icons8-oreja.svg" alt="html bootstrap"></img>
                        <br />
                        <img src="./Images/icons8-sass.svg" alt="html sass"></img>
                        <img src="./Images/icons8-reaccionar-nativo.svg" alt="react icon"></img>
                        <img src="./Images/icons8-ngp.svg" alt="npm icon" ></img>
                        <img src="./Images/icons8-git.svg" alt="git icon"></img>
                        <img src="./Images/icons8-consola-de-google-firebase.svg" alt="firebase icon"></img>
                    </div>
                </Container>
            </section>

            {/* PORTFOLIO SECTION */}

            <section id="proyectos" >
                <Container fluid className="proyectos col-12 d-flex row justify-content-center  m-0 ">
                    <div className="proyectosHead text-center col-6">
                        <h3>Proyectos</h3>
                    </div>
                    <hr />
                    <div className="carouselProyectos d-flex col-12 justify-content-center mx-auto">
                        <CarouselPortfolio />
                    </div>

                </Container>
            </section>

            {/* CONTACT SECTION */}
            <section id="contacto">
                <Container fluid className="contactoSection d-flex col-12 row justify-content-center">
                    <div className="contactoSectionHeader text-center">
                        <h4>Contacto</h4>
                    </div>
                    <hr />
                    <div className="contactoSectionParagraph text-center">
                        <p>
                            ¿Te gusta algunos de mis trabajos ?
                            Aqui podrás encontrar todas mis redes sociales y canales de contacto
                        </p>
                    </div>
                    <br />
                    <div className="socialMedia col-6 d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/federico-wuthrich-668633164/" target={"_blank"} rel='noreferrer'><img src="./Images/icons8-linkedin.svg" alt="" className="socialMediaIcon" /> </a>
                        <a href="https://github.com/WFederico97" target={"_blank"} rel='noreferrer'><img src="./Images/icons8-github.svg" alt="" className="socialMediaIcon" /> </a>
                        <a href="mailto:wuthrich09@gmail.com?Subject=Portfolio%20Wuthrich" target={"_blank"} rel='noreferrer'><img src="./Images/icons8-gmail-logo.svg" alt="" className="socialMediaIcon" /> </a>
                    </div>
                </Container>

            </section>
        </>

    )
}

export default Main