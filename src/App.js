import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Alata|Quicksand:700&display=swap');

html {
    height: 100%;

  body {
    font-family: 'Alata', sans-serif;
    display: flex;
    flex-direction: column;
    width:100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #53538d 0%,#090f09 100%);  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
}
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Container />
    </Router>
  </React.Fragment>
);

export default App;
