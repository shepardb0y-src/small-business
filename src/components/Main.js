import React from "react";
import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //   object-fit: cover;
  margin-top: 2%;
`;
export const Image = styled.img`
  padding: 10%;
  //   border: 10px red solid;
  width: 50%;
  height: 50%;
  background-color: #ebebeb;
  
`;
const Main = () => {
  return (
    <MainStyled>
      <Image
        src="https://cdn.dribbble.com/users/2837665/screenshots/11479334/media/8997ac76da4966512cfb07a2d8a3ed2b.png?compress=1&resize=1200x900&vertical=top"
        alt="moving-cough-image"
      ></Image>
    </MainStyled>
  );
};

export default Main;
