import React, { Component } from "react";
import PageTitleHeading from "../PageTitleHeading";
import PageTitleBackground from "../PageTitleBackground";
import AccentBackground from "../AccentBackground";

class ApieMus extends Component {
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

export default ApieMus;
