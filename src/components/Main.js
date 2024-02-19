import React from "react";
import styled from "styled-components";
import { Button } from "../components/GlobalStyles";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import CarouselImageData from "./CarouselImageData";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   object-fit: cover;
  margin-top: 2%;
  gap: 2rem;
`;
export const Image = styled.img`
  // padding: 10%;
  //   border: 10px red solid;
  width: 50%;
  height: 50%;
  background-color: #ebebeb;
`;
const CompanyName = styled.h1`
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 4rem;
  // border: 1px solid black;
  border-radius: 26%;
`;
const PreviousWork = styled.h1`
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 4rem;
  // border: 1px solid black;
  border-radius: 26%;
`;
const Main = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/About");
  };

  return (
    <MainStyled>
      <CompanyName>Champs Cleaning And Move Out LLC</CompanyName>
      <Image
        src="https://www.neighbor.com/storage-blog/wp-content/uploads/2020/10/How-to-Move-a-Couch-Neighbor.jpg"
        alt="moving-cough-image"
      ></Image>{" "}
      <PreviousWork> View previous Work!</PreviousWork>
      <Carousel slides={CarouselImageData} />
      <Button onClick={handleClick}>Learn More!</Button>
    </MainStyled>
  );
};

export default Main;
