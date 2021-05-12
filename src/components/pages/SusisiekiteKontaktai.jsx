import React, { Component } from "react";
import PageTitleHeading from "../PageTitleHeading";
import PageTitleBackground from "../PageTitleBackground";
import AccentBackground from "../AccentBackground";

class SusisiekiteKontaktai extends Component {
  state = {};
  render() {
    return (
      <PageTitleBackground>
        <AccentBackground>
          <PageTitleHeading>Apie mus</PageTitleHeading>
        </AccentBackground>
      </PageTitleBackground>
    );
  }
}

export default SusisiekiteKontaktai;
