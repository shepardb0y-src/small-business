import React from "react";
import styled from "styled-components";

export const NavContainerh1 = styled.div`
  background-color: lightblue;
  
  width: 50px;
  height: 50px;
  border: 3px solid black;
  border-radius: 50%;
  overflow: wrap;

  
`;
const NavItems = ({ title }) => {
  return (
    <div>
      <NavContainerh1>{title}</NavContainerh1>
    </div>
  );
};

export default NavItems;
