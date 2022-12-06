import React from "react";
import { useEffect } from "react";
import "./Main.css";
import { MdWavingHand } from "react-icons/md";
import Container from "react-bootstrap/esm/Container";
import { BsCloudDownload } from "react-icons/bs";
import CarouselPortfolio from "../Carousels/CarouselPortfolio/CarouselPortfolio";
import CarouselSkills from "../Carousels/CarouselSkills/CarouselSkills";
import i18n from "../../i18n";
import AOS from "aos";

const Main = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/*Home*/}
            <Container fluid id="home" className="homeSection ">
                <h3 className="homeSectionTitle    "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <MdWavingHand className="mdIcon" />
                    {" { "}
                    {i18n.t("greetingHomeA")}
                    <p
                        className="homeSectionParagraph "
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        {i18n.t("greetingHomeB")} {" }"}
                    </p>
                </h3>

                <br />
                <img
                    className="mainBg "
                    src="./Images/nyBackground.jpg"
                    alt="nyc skyline"
                />
            </Container>

            {/* ABOUT ME */}

            <section id="about">
                <Container fluid className="d-flex col-sm-12 about m-0">
                    <card className="cardAbout bg-transparent">
                        <header className="cardTitle ">
                            <h3 className="aboutH1   "
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                {i18n.t("aboutH3")}
                            </h3>
                            <h4 className="aboutH1    "
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                {i18n.t("aboutH4")}{" "}
                            </h4>{" "}
                            <hr />
                        </header>
                        <body>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <p className="aboutP">
                                    {i18n.t("aboutP")}
                                </p>
                            </div>

                            <div
                                className="certBtns mx-auto"
                                data-aos="zoom-in-up"
                                data-aos-duration="1500"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <a
                                    href="https://drive.google.com/file/d/1sEK31dJjinIONNPo-oVKs-JGmHnfWhr_/view?usp=share_link"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <button className="cvDownloadBtn ">
                                        {i18n.t("cvDownloadbtn")} <BsCloudDownload />{" "}
                                    </button>
                                </a>
                                <a
                                    href="https://www.coderhouse.com/certificados/62313533579172004be63618?lang=en"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <button className="dwDownloadBtn  ">
                                        {i18n.t("certWebDev")} <BsCloudDownload />{" "}
                                    </button>
                                </a>
                                <a
                                    href="https://www.coderhouse.com/certificados/62a100e95bd8d6001973b015?lang=en"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <button className="jsDownloadBtn ">
                                        {i18n.t("certJavascript")} <BsCloudDownload />{" "}
                                    </button>
                                </a>
                                <a
                                    href="https://www.coderhouse.com/certificados/6333e2dd6e35bf000e34d08a?lang=en"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <button className="reactDownloadBtn  ">
                                        {i18n.t("certReact")} <BsCloudDownload />{" "}
                                    </button>
                                </a>
                                <a
                                    href="https://www.coderhouse.com/certificados/6333e2dd6e35bf000e34d08d?lang=en"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <button className="frontDownloadBtn  ">
                                        {i18n.t("certFront")} <BsCloudDownload />{" "}
                                    </button>
                                </a>
                                <a
                                    href="https://www.efset.org/cert/f7M1H3"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <button className="efDownloadBtn ">
                                        {i18n.t("certEng")} <BsCloudDownload />{" "}
                                    </button>
                                </a>
                            </div>
                        </body>
                    </card>
                </Container>
            </section>

            {/* SKILLS SECTION */}

            <section id="skills">
                <Container
                    fluid
                    className="  skills col-lg-12 d-flex row justify-content-center m-0 p-0 "
                >
                    <div className="skillsHead col-6 ">
                        <h3>{i18n.t("skillsH3")}</h3>
                    </div>
                    <hr />
                    <CarouselSkills />
                </Container>
            </section>

            {/* PORTFOLIO SECTION */}

            <section id="proyects">
                <Container fluid className="proyectos ">
                    <div className="proyectosHead  col-12">
                        <h3>{i18n.t("proyectsH3")}</h3>
                    </div>
                    <hr />
                    <div className="carouselProyectos">
                        <CarouselPortfolio />
                    </div>
                </Container>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact">
                <Container
                    fluid
                    className="contactoSection  "
                >
                    <div className="contactoSectionHeader  ">
                        <h4>{i18n.t("contactH4")}</h4>
                    </div>
                    <hr />
                    <div
                        className="contactoSectionParagraph "
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <p>{i18n.t("contactP")}</p>
                    </div>
                    <br />
                    <div className="socialMedia ">
                        <a
                            href="https://www.linkedin.com/in/federico-wuthrich-668633164/"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <img
                                src="./Images/icons8-linkedin.svg"
                                alt=""
                                className="socialMediaIcon"
                            />{" "}
                        </a>
                        <a
                            href="https://github.com/WFederico97"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <img
                                src="./Images/icons8-github.svg"
                                alt=""
                                className="socialMediaIcon"
                            />{" "}
                        </a>
                        <a
                            href="mailto:wuthrich09@gmail.com?Subject=Portfolio%20Wuthrich"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <img
                                src="./Images/icons8-gmail-logo.svg"
                                alt=""
                                className="socialMediaIcon"
                            />{" "}
                        </a>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Main;
