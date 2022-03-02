import React from "react";
import NavRows from "./Nav-items";
import styled from "styled-components";
export const NavContainer = styled.div`
  background-color: #52489c;

  display: flex;
  font-size: 3em;
  justify-content: space-around;
  border: black solid 1px;
  box-shadow: 10px 5px 5px black;
  z-index:99;
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavRows title="Home" />
      <NavRows title="Prices" />
      <NavRows title="About" />
      <NavRows title="Login" />
    </NavContainer>
  );
};

export default Nav;
