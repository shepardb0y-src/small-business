import React from "react";
import styled from "styled-components";
import {useState} from 'react'

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
const ButtonContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: red;
`;
const Modal = ({ setOpenModal }) => {
    const [userInput, setUserInput] = useState("");
  const handleClick = (e) => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };
  const handleClick2 =  (e) => {
    e.preventDefault();
    console.log("clicked")
  }
  

  return (
    <ModalBackground>
      <ModalContainer >
        <Button onClick={handleClick}>X</Button>
        <Title>Modal-title</Title>
        <Input onChange={handleChange}/>
        <Input onChange={handleChange} />
        <Input onChange={handleChange}/>
        <Input onChange={handleChange}/>
        <Input onChange={handleChange}/>
        <Input onChange={handleChange}/>
        <ButtonContainer onClick={handleClick2}>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
        <Footer> Modal-footer</Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
