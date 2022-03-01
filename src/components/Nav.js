import React from "react";
import NavItems from "./Nav-items";
import styled from "styled-components";
export const NavContainer = styled.div`
  background-color: #52489C;

  display: flex;
  font-size: 3em; 
  justify-content: space-around;
  border: black solid 1px;
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavItems title="Home" />
      <NavItems title="Prices" />
      <NavItems title="About" />
      <NavItems title="Login" />
    </NavContainer>
  );
};

export default Nav;
