import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
H1 {
  text-transform: uppercase;
  color: red;
  font-size: 18px;

}

H2 {
  text-transform: uppercase;
  color: blue;
  font-size: 14px;

}

H3 {
  text-transform: uppercase;
  color: green;
  font-size: 10px;

}


`;

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
