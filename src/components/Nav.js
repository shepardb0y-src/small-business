import React from "react";
import NavRows from "./Nav-items";
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
  position:sticky;
  top:0;
`;



const Nav = () => {
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
      <Link to="/login">
        <NavRows title="Login" />
      </Link>
    </NavContainer>
  );
};

export default Nav;
