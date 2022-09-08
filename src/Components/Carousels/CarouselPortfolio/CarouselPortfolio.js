import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { VscGithub, VscRocket } from "react-icons/vsc";
import './CarouselPortfolio.css'

function CarouselPortfolio() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel className='d-flex  col-sm-12' activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="  img-fluid"
                        src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1662140802/Images/soragnaWeb_hvgtjq.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='carouselCaption '>
                        <h3>Soragna Pizza e Pasta</h3>
                        <p>HTML5 CSS3 BOOTSTRAP </p>
                        <div>
                            <a href='https://wfederico97.github.io/Soragna-Pizza-Js-Coder/' target={'_blank'} rel="noreferrer"  ><VscRocket className='carouselDeployIcon'  /></a>
                            <a href='https://github.com/WFederico97/Soragna-Pizza-Js-Coder' target={'_blank'} rel='noreferrer'><VscGithub className='carouselCodeIcon'  /> </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" img-fluid"
                        src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1662140803/Images/soragnaJsWeb_jvbqzm.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3>Soragna Pizza e Pasta</h3>
                        <p>HTML5 CSS3 BOOTSTRAP & JAVASCRIPT</p>
                        <div>
                            <a href='https://wfederico97.github.io/Soragna-Pizza-Js-Coder/' target={'_blank'} rel="noreferrer"  ><VscRocket className='carouselDeployIcon'  /></a>
                            <a href='https://github.com/WFederico97/Soragna-Pizza-Js-Coder' target={'_blank'} rel='noreferrer'><VscGithub className='carouselCodeIcon'  /></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" img-fluid"
                        src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1662140798/Images/syamimateWeb_h5fqzz.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carouselCaption'>
                        <h3>S&A Mimate</h3>
                        <p>
                            REACT JS
                        </p>
                        <div>
                            <a href='https://sya-mimate-v2.vercel.app' target={'_blank'} rel="noreferrer"  ><VscRocket className='carouselDeployIcon'  /></a>
                            <a href='https://github.com/WFederico97/sya-mimate-v2' target={'_blank'} rel='noreferrer'><VscGithub className='carouselCodeIcon'  /></a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
export default CarouselPortfolio
