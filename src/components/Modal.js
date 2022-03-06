import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
 
  
  display: flex;
  justify: content;
  align-items: center;
  background-color: grey;
  flex-direction: column;
  gap:2rem;
`;
const ModalContainer = styled.div`
  display: flex;
  justify: content;
  align-items: center;
  background-color: purple;
  flex-direction: column;
`;
const Title = styled.div`
  background-color: blue;
`;
const Input = styled.input`
  background-color: pink;
`;
const Footer = styled.div`
  background-color: orange;
`;
const Button = styled.button`
  background-color: red;
`;
const Modal = ({ setOpenModal }) => {
  const handleClick = (e) => {
    setOpenModal(false);
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <Button onClick={handleClick}>X</Button>
        <Title>Modal-title</Title>
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Button>Submit</Button>
        <Footer> Modal-footer</Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
