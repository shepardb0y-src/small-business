import React from "react";
import { useContext } from "react";
import NavRows from "./Nav-items";
import Usercontext from "../context/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavContainer = styled.div`
  background-color: #52489c;
  display: flex;
  font-size: 3em;
  justify-content: space-around;
  border: black solid 1px;
  box-shadow: 10px 5px 5px black;
  z-index: 99;
  text-decoration: none;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 320px) {
    display:flex;
    flex-direction:column;
  }
  @media only screen and (max-width: 360px) {
    display:flex;
    flex-direction:column;
  }
  @media only screen and (max-width: 411px) {
    display:flex;
    flex-direction:column;
  }

  @media only screen and (max-width: 768px) {
    display:flex;
 flex-direction:column;
  }
 
`;

const Nav = () => {
  const user = useContext(Usercontext);
 const  handleClick = (()=>{
    setUser(null)
    console.log(user)
  })
  return (
    <NavContainer>
      <Link to="/">
        <NavRows title="Home" />
      </Link>
      <Link to="/services">
        <NavRows title="Services" />
      </Link>
      <Link to="/about">
        <NavRows title="About" />
      </Link>
      {user ? (
        <Link to="/Data">
          <NavRows title="Data" />
        </Link>
      ) : null}
      {!user ? (
        <Link to="/login">
          <NavRows title="Login" />
        </Link>
      ) : (
        <Link onClick={handleClick} to="/">
          <NavRows title="Logout" />
        </Link>
      )}
    </NavContainer>
  );
};

export default Nav;
