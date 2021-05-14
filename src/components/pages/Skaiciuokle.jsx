import React, { Component } from "react";
import PageTitleHeading from "../PageTitleHeading";
import PageTitleBackground from "../PageTitleBackground";
import AccentBackground from "../AccentBackground";
import Calculator from "../calculator/Calculator";

class Skaiciuokle extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageTitleBackground>
          <AccentBackground>
            <PageTitleHeading>Importo mokesčių skaičiuoklė</PageTitleHeading>
          </AccentBackground>
        </PageTitleBackground>
        <Calculator />
      </React.Fragment>
    );
  }
}

export default Skaiciuokle;
