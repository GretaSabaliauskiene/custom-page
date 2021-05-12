import React, { Component } from "react";
import PageTitleHeading from "../PageTitleHeading";
import PageTitleBackground from "../PageTitleBackground";
import AccentBackground from "../AccentBackground";

class Skaiciuokle extends Component {
  state = {};
  render() {
    return (
      <PageTitleBackground>
        <AccentBackground>
          <PageTitleHeading>Skaičiuoklė</PageTitleHeading>
        </AccentBackground>
      </PageTitleBackground>
    );
  }
}

export default Skaiciuokle;
