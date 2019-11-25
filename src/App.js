import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container";

export const GlobalStyle = createGlobalStyle`

html {
    height: 100%;

  body {
    @import url('https://fonts.googleapis.com/css?family=Alata|Quicksand:700&display=swap');
  
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
    <Router>
      <Header />
      <Container />
    </Router>
  </React.Fragment>
);

export default App;
