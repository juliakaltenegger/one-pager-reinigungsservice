import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0px;

}
H1 {
  font-family: sans-serif;
  text-transform: uppercase;
  color: purple;
  font-size: 18px;
  margin: 0px;
    padding: 0px;
}

H2 {
  font-family: sans-serif;

  text-transform: uppercase;
  color: purple;
  font-size: 14px;
  margin: 0px;
    padding: 0px;

}

H3 {
  font-family: sans-serif;

  text-transform: uppercase;
  color: purple;
  font-size: 10px;

p {  
  font-family: sans-serif;
  font-size: 20px;
}

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
