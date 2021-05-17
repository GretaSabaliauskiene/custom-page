import React, { Component } from "react";

import ArtickleH2 from "../common/ArtickleH2";
import WhiteArtickle from "../common/WhiteArtickle";
import PageHeader from "../common/PageHeading";
import Embeded from "../common/Embeded";

class PasirasytiSutarti extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageHeader label="Pasirašyti sutartį" />
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <ArtickleH2>Atstovavimo sutartis - rinkitės mus!</ArtickleH2>
            </div>
          </div>
        </div>

        <Embeded />
        <div className="container">
          <WhiteArtickle>
            Jeigu kyla neaiškumų ar turite papildomų klausimų dėl sutarties
            sudarymo su UAB „Granito“ tarpininkai - visuomet galite su mumis
            susisiekti telefonu 8 (37) 363398.
          </WhiteArtickle>
        </div>
      </React.Fragment>
    );
  }
}

export default PasirasytiSutarti;
