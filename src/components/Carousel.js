import React from 'react';
import CarouselImageData from './CarouselImageData';

const Carousel = () => {
    return (
        <div>
            {
                CarouselImageData.map((slide,index) =>{
                    return <img src={slide.images} alt='previous works'/>
                })
            }
        </div>
    );
}

export default Carousel;
