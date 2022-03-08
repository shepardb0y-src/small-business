import React from "react";
import styled from "styled-components";
import { Button } from "../components/GlobalStyles";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

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
  padding: 10%;
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
const Main = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/About");
  };

  return (
    <MainStyled>
      <CompanyName>Champs Cleaning And Move Out LLC</CompanyName>
      <Image
        src="https://cdn.dribbble.com/users/2837665/screenshots/11479334/media/8997ac76da4966512cfb07a2d8a3ed2b.png?compress=1&resize=1200x900&vertical=top"
        alt="moving-cough-image"
      ></Image>{" "}
      <Carousel />
      <Button onClick={handleClick}>Learn More!</Button>
    </MainStyled>
  );
};

export default Main;
