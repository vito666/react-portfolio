import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
  flex-direction: column;
  width:100vw;
  height:100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(233.1deg, #216190 19.65%, #0834d0 81.25%);
    @media (max-width: 768) {
      height: 100vh;
    }
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Header />
      <Container />
    </Router>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
