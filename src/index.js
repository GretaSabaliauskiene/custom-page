import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/navigation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <Hero />
    <Benefits />
  </React.StrictMode>,
  document.getElementById("root")
);
