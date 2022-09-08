import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import './CarouselSkills.css'

function CarouselSkills() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel className='d-flex m-5 col-sm-12' interval={1500} touch='true' variant='dark'  activeIndex={index} onSelect={handleSelect}  >
                <Carousel.Item className='py-5'   >
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-html-5.svg' />
                        <Figure.Caption className='text-light '>
                            HTML 5
                        </Figure.Caption>
                    </Figure>
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-css3.svg' />
                        <Figure.Caption className='text-light '>
                            CSS3
                        </Figure.Caption>
                    </Figure>
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-oreja.svg' />
                        <Figure.Caption className='text-light '>
                            BOOTSTRAP
                        </Figure.Caption>
                    </Figure>
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-git.svg' />
                        <Figure.Caption className='text-light '>
                           GIT
                        </Figure.Caption>
                    </Figure>
                    <Figure >
                            <Figure.Image className='figImage' src='./Images/icons8-sass.svg' />
                            <Figure.Caption className='text-light '>
                                SASS
                            </Figure.Caption>
                        </Figure>
                </Carousel.Item>
                <Carousel.Item className='py-5' >
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-javascript.svg' />
                        <Figure.Caption className='text-light '>
                            JAVASCRIPT
                        </Figure.Caption>
                    </Figure>
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-ngp.svg' />
                        <Figure.Caption className='text-light '>
                            NODE PACKAGE MANAGER
                        </Figure.Caption>
                    </Figure>
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-reaccionar-nativo.svg' />
                        <Figure.Caption className='text-light '>
                            REACT JS
                        </Figure.Caption>
                    </Figure>
                    <Figure >
                        <Figure.Image className='figImage' src='./Images/icons8-consola-de-google-firebase.svg' />
                        <Figure.Caption className='text-light '>
                            FIREBASE
                        </Figure.Caption>
                    </Figure>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
export default CarouselSkills
