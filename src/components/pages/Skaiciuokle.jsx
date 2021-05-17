import React, { Component } from "react";
import Calculator from "../calculator/Calculator";
import PageHeader from "../common/PageHeading";

class Skaiciuokle extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageHeader label="Importo mokesčių skaičiuoklė" />
        <Calculator />
      </React.Fragment>
    );
  }
}

export default Skaiciuokle;
