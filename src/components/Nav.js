import React from "react";
import NavItems from "./Nav-items";
import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: yellow;
  font-size:4rem;
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
