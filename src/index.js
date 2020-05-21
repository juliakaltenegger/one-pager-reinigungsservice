import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

import { hydrate, render } from "react-dom";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0px;

}
H1 {
  font-family:  'Raleway', sans-serif;;
;
  text-transform: uppercase;
  color: purple;
  font-size: 24px;
  font-weight: 400;

  margin: 0px;
  padding: 0px;
    
}

H2 {
  font-family:  'Raleway', sans-serif;
;

  text-transform: uppercase;
  text-align: center;
  color: purple;
  font-size: 24px;
  font-weight: 400;
  margin: 0px;
  padding: 0px;

}

H3 {
  font-family: 'Raleway', sans-serif;;
;
  text-transform: uppercase;
  color: purple;
  font-weight: 400;
  font-size: 14px;
}

p {  
  font-family: 'Roboto', sans-serif;
;
  font-size: 12px;
  color: #505050	;
}
li {  
  font-family:  'Roboto', sans-serif;
;
  font-size: 12px;
}
`;

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      <App />
      <GlobalStyle />
    </>,
    rootElement,
  );
} else {
  render(
    <>
      <App />
      <GlobalStyle />
    </>,
    rootElement,
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
