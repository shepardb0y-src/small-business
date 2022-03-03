import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Inputs";
import Button from "../components/Button";
import Icon from "../components/Icons";
import Usercontext from "../context/UserContext";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue
    url("https://cdn.dribbble.com/users/19849/screenshots/14040157/media/168ee88f36ba350db5e001e1f7161a4d.png")
    no-repeat fixed center;
`;
const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;
const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;

  // background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  // backdrop-filter: blur(5px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setUser(username);
    console.log("clicked");
    console.log(username);

    const newClient = {
      username: username,
    };
    try {
      if (username) {
        // ADDING STUDENT
        const response = await axios.post(
          "http://localhost:8080/api/v1/addclients",
          newClient
        );

        // if (response.status === 200) {
        //   console.log("hi");
        // }
      }
    } catch (err) {
      console.log(err);
    }
    navigate("/data");
  };
  return (
    <LoginContainer>
      <LoginFormContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer onChange={handleChange}>
          <Input type="text" placeholder="Email" value={username} />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer onClick={handleClick}>
          <Button type="submit" content="Log in" />
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
          <Icon>
            <FaFacebookF />
          </Icon>
          <Icon>
            <FaInstagram />
          </Icon>
          <Icon>
            <FaTwitter />
          </Icon>
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
