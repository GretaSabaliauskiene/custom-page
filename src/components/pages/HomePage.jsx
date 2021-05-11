import React, { Component } from "react";
import Hero from "../Hero";
import Benefits from "../Benefits";

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
