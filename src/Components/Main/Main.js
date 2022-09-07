import React from "react";
import './Main.css'
import { MdWavingHand } from "react-icons/md";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import { BsCloudDownload } from 'react-icons/bs'
import CarouselPortfolio from "../Carousels/CarouselPortfolio/CarouselPortfolio";
import CarouselSkills from "../Carousels/CarouselSkills/CarouselSkills";
import i18n from "../../i18n";

const Main = () => {
    return (
        <>
            {/*Home*/}
            <div className="homeSection text-center">
                <h3 className="homeSectionTitle">
                    <MdWavingHand className="mdIcon" /> {'{'}{i18n.t('greetingHomeA')}
                    <p className="homeSectionParagraph">
                    {i18n.t('greetingHomeB')} {'}'}
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
                            <h3 className="aboutH1">{i18n.t('aboutH3')}</h3> <h4 className="aboutH1">{i18n.t('aboutH4')} </h4> <hr />
                        </header>
                        <body className="cardBody">
                            <p className="aboutP">{i18n.t('aboutP')}
                            </p>
                            <div className="certBtns gap-3 col-6 mx-auto d-flex">
                                <a href="https://drive.google.com/file/d/1y_UlFvRtI_t4Xgs5txLQ9aRtAHYucgwx/view?usp=sharing" target={"_blank"} rel='noreferrer' ><button className="cvDownloadBtn">{i18n.t('cvDownloadbtn')} <BsCloudDownload /> </button></a>
                                <a href="https://www.coderhouse.com/certificados/62313533579172004be63618" target={"_blank"} rel='noreferrer' ><button className="dwDownloadBtn">{i18n.t('certWebDev')} <BsCloudDownload /> </button></a>
                                <a href="https://www.coderhouse.com/certificados/62a100e95bd8d6001973b015" target={"_blank"} rel='noreferrer' ><button className="jsDownloadBtn">{i18n.t('certJavascript')} <BsCloudDownload /> </button></a>
                                <a href="https://www.efset.org/cert/f7M1H3" target={"_blank"} rel='noreferrer' ><button className="efDownloadBtn">{i18n.t('certEng')} <BsCloudDownload /> </button></a>

                            </div>
                        </body>
                    </Card>
                </Container>
            </section>

            {/* SKILLS SECTION */}

            <section id="skills">
                <Container fluid className="  skills col-12 d-flex row justify-content-center m-0 ">
                    <div className="skillsHead col-6 ">
                        <h3>{i18n.t('skillsH3')}</h3>
                    </div>
                    <hr />
                    <CarouselSkills />
                </Container>
            </section>

            {/* PORTFOLIO SECTION */}

            <section id="proyects">
                <Container fluid className="proyectos ">
                    <div className="proyectosHead  col-12">
                        <h3>{i18n.t('proyectsH3')}</h3>
                    </div>
                    <hr />
                    <div className="carouselProyectos">
                        <CarouselPortfolio />
                    </div>

                </Container>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact">
                <Container fluid className="contactoSection col-12 justify-content-center">
                    <div className="contactoSectionHeader text-center">
                        <h4>{i18n.t('contactH4')}</h4>
                    </div>
                    <hr />
                    <div className="contactoSectionParagraph text-center">
                        <p>
                        {i18n.t('contactP')}
                        </p>
                    </div>
                    <br />
                    <div className="socialMedia col-12 d-flex  justify-content-center">
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