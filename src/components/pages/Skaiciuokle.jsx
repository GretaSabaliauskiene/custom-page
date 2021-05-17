import React, { Component } from "react";
import PageTitleHeading from "../common/PageTitleHeading";
import PageTitleBackground from "../common/PageTitleBackground";
import AccentBackground from "../common/AccentBackground";
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
