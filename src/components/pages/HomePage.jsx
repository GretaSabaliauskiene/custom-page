import React, { Component } from "react";
import Hero from "../blocks/Hero";
import Benefits from "../blocks/Benefits";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero />
        <Benefits />
      </div>
    );
  }
}

export default HomePage;
