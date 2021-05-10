import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/navigation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <Hero />
    <Benefits />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
