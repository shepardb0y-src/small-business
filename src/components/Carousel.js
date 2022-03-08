import React from 'react';
import CarouselImageData from './CarouselImageData';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState} from 'react'

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    // const length = slides.length
    return (
        <div>
            <ArrowCircleLeftIcon/>
            <ArrowCircleRightIcon/>
            {
                CarouselImageData.map((slide,index) =>{
                    return <img src={slide.images} alt='previous works'/>
                })
            }
        </div>
    );
}

export default Carousel;
