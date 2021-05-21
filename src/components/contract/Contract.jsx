import React, { Component } from "react";
import styled from "styled-components";
import COLORS from "../Colors";
import PageHeading from "../common/PageHeading";
import ArtickleH2 from "../common/ArtickleH2";

const AccentBackground = styled.div`
  background-color: ${COLORS.accentBackground};
`;

class Contract extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageHeading label="Pasirašykite sutartį" />
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <ArtickleH2>Atstovavimo sutartis - rinkitės mus!</ArtickleH2>
            </div>
          </div>
          <div className="row">form</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contract;
