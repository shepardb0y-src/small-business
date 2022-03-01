import React from "react";
import NavRows from "./Nav-items";
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
      <NavRows title="Home" />
      <NavRows title="Prices" />
      <NavRows title="About" />
      <NavRows title="Login" />
    </NavContainer>
  );
};

export default Nav;
