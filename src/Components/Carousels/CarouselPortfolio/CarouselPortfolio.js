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
        <Carousel activeIndex={index} onSelect={handleSelect} style={{height:'45em'}} className=' w-100  justify-content-center carousel d-flex  col-6 p-3'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1662140802/Images/soragnaWeb_hvgtjq.png"
                    alt="First slide"
                />
                <Carousel.Caption className='carouselCaption '>
                    <h3>Soragna Pizza e Pasta</h3>
                    <p>HTML5 CSS3 BOOTSTRAP </p>
                    <div>
                        <a href='https://wfederico97.github.io/Soragna-Pizza-Js-Coder/' target={'_blank'} rel="noreferrer"  ><VscRocket style={{ width: '3em', height: '3em', margin: '1em', color: '#000' }} /></a>
                        <a href='https://github.com/WFederico97/Soragna-Pizza-Js-Coder' target={'_blank'} rel='noreferrer'><VscGithub style={{ width: '3em', height: '3em', margin: '1em' , color: '#000'}} /></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1662140803/Images/soragnaJsWeb_jvbqzm.png"
                    alt="Second slide"
                />

                <Carousel.Caption className='carouselCaption'>
                    <h3>Soragna Pizza e Pasta</h3>
                    <p>HTML5 CSS3 BOOTSTRAP & JAVASCRIPT</p>
                    <div>
                        <a href='https://wfederico97.github.io/Soragna-Pizza-Js-Coder/' target={'_blank'} rel="noreferrer"  ><VscRocket style={{ width: '3em', height: '3em', margin: '1em', color: '#000' }} /></a>
                        <a href='https://github.com/WFederico97/Soragna-Pizza-Js-Coder' target={'_blank'} rel='noreferrer'><VscGithub style={{ width: '3em', height: '3em', margin: '1em', color: '#000' }} /></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1662140798/Images/syamimateWeb_h5fqzz.png"
                    alt="Third slide"
                />

                <Carousel.Caption className='carouselCaption'>
                    <h3>S&A Mimate</h3>
                    <p>
                        REACT JS
                    </p>
                    <div>
                        <a href='https://sya-mimate-v2.vercel.app' target={'_blank'} rel="noreferrer"  ><VscRocket style={{ width: '3em', height: '3em', margin: '1em' , color: '#000' }} /></a>
                        <a href='https://github.com/WFederico97/sya-mimate-v2' target={'_blank'} rel='noreferrer'><VscGithub style={{ width: '3em', height: '3em', margin: '1em' , color: '#000' }} /></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default CarouselPortfolio
