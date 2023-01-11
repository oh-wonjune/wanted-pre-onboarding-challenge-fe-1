import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Space Grotesk", sans-serif;
}
body {
  background: #005c97;
  background: linear-gradient(to right, #363795, #005c97);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
`;

export default GlobalStyle;
