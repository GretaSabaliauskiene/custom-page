import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navigation from "./components/navigation";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
  </React.StrictMode>,
  document.getElementById("root")
);
