import React, { Component } from "react";
import PageTitleHeading from "../PageTitleHeading";
import PageTitleBackground from "../PageTitleBackground";
import AccentBackground from "../AccentBackground";

class PasirasytiSutarti extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageTitleBackground>
          <AccentBackground>
            <PageTitleHeading>Pasirašyti sutartį</PageTitleHeading>
          </AccentBackground>
        </PageTitleBackground>
      </React.Fragment>
    );
  }
}

export default PasirasytiSutarti;
