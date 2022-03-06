import React from 'react';
import styled from 'styled-components'

const ModalBackground= styled.div`
display:flex;
justify:content;
align-items:center;
background-color:grey;
`
const ModalContainer= styled.div`
display:flex;
justify:content;
align-items:center;
background-color:grey;
flex-direction:column;
`
const Title= styled.div`
background-color:blue;
`
const Body= styled.div`
background-color:pink;
`
const Footer= styled.div`
background-color:orange;
`
const Button= styled.button`
background-color:red;
`
const Modal = () => {
    return (
        <ModalBackground>
        <ModalContainer>
            <Button>X</Button>
            <Title>Modal-title</Title>
            <Body>MOdal-Body</Body>
           <Footer> MOdal-footer</Footer>
        </ModalContainer>
        </ModalBackground>
    );
}

export default Modal;
