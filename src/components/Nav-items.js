import React from "react";
import styled from "styled-components";

export const NavContainerh1 = styled.div`
  background-color: red;
`;
const NavItems = ({ title }) => {
  return (
    <div>
      <NavContainerh1>{title}</NavContainerh1>
    </div>
  );
};

export default NavItems;
