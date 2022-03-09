import React from "react";
import styled from "styled-components";

import CarouselImageData from "./CarouselImageData";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useState } from "react";

const Slider = styled.div`
  position: relative;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  // flex-wrap:wrap;
`;
const Image = styled.img`
  width: 900px;
  height: 500px;
  border-radius: 10px;
`;

const LeftIcon = styled.div`
  font-size: 3rem;
  color: #000;
  z-index: 15;
  curor: pointer;

`;
const RightIcon = styled.div`
  font-size: 3rem;
  color: #000;
  z-index: 15;
  curor: pointer;
  
`;
const ArrowContainer = styled.div`
  position: absolute;
  height: 100px;
`;
const ImageContainer = styled.div`

`;

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
//   const handleClicknextSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current + 1);
//     console.log("click");
//   };
  const handleClickSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log("click2");
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Slider>
      <ArrowContainer>
        <RightIcon>
          <ArrowCircleRightIcon onClick={handleClickSlide} />
        </RightIcon>
        {/* <RightIcon>  <ArrowCircleRightIcon onClick={handleClicknextSlide} /></RightIcon> */}
        
      </ArrowContainer>

      {CarouselImageData.map((slide, index) => {
        return (
          <ImageContainer>
              {
                  // {index === current ? 'slide active: 'slide'}
// key={index}
              }
            {index === current && (
              <Image src={slide.images} alt="previous works" />
            )}
          </ImageContainer>
        );
      })}
    </Slider>
  );
};

export default Carousel;
