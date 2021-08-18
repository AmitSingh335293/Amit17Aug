import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
      {/* <Home /> */}
    </BrowserRouter>
  </>,
  rootElement
);
