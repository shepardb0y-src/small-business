import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
//global style
const GlobalStyle = createGlobalStyle`
  * {
  text-decoration:none;
    padding: 0;
    margin: 0;
    // max-width: 80%;
  //  border: 10px solid red;
  }
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default GlobalStyle;
