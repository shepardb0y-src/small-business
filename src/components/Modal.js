import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const ModalBackground = styled.div`
  display: flex;
  justify: content;
  align-items: center;
  background-color: grey;
  flex-direction: column;
  gap: 2rem;
`;
const ModalContainer = styled.div`
  display: flex;
  justify: content;
  align-items: center;
  background-color: purple;
  flex-direction: column;
`;
const Title = styled.div`
  background-color:#59C3C3;
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
  const [state, setState] = React.useState({
    firstname: "",
    lastname: "",
    streetname: "",
    stateLocation: "",
    zipcode: "",
    comments: "",
  });
  const [editForm2, setEditForm2] = useState(true);
  const [userToEdit, setUserToEdit] = useState({});
 
  const handleClick = (e) => {
    setOpenModal(false);
  };

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  const handleClick2 = async (e) => {
    const firstname = state.firstname;
    const lastname = state.lastname;
    const streetname = state.streetname;
    const stateLocation = state.stateLocation;
    const zipcode = state.zipcode;
    const comments = state.comments;
    const newClient = {
      firstname: firstname,
      lastname: lastname,
      streetname: streetname,
      stateLocation: stateLocation,
      zipcode: zipcode,
      comments: comments,
    };
    try {
      if (editForm2) {
        // ADDING STUDENT
        //// axios is green idk why i need to
        const response = await axios.post(
          "http://localhost:8080/api/v1/adduser",
          newClient
        );
      }
      console.log(newClient);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <Button onClick={handleClick}>X</Button>
        <Title>Service Request Form</Title>
        <Input
          value={state.firstname}
          type="text"
          name="firstname"
          onChange={handleChange}
          placeholder="First Name"
        />
        <Input
          value={state.lastname}
          type="text"
          name="lastname"
          onChange={handleChange}
          placeholder="lastsname"
        />
        <Input
          value={state.streetname}
          type="text"
          name="streetname"
          onChange={handleChange}
          placeholder="Street name and number"
        />
        <Input
          value={state.stateLocation}
          type="text"
          name="stateLocation"
          onChange={handleChange}
          placeholder="State"
        />
        <Input
          value={state.zipcode}
          type="text"
          name="zipcode"
          onChange={handleChange}
          placeholder="Zipcode"
        />
        <Input
          value={state.comments}
          type="text"
          name="comments"
          onChange={handleChange}
          placeholder="Email-adresss"
        />
        <ButtonContainer onClick={handleClick2}>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
        <Footer>Thank you for Inquring</Footer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
