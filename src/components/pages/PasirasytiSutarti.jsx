import React, { Component } from "react";
import ArtickleH2 from "../common/ArtickleH2";
import WhiteArtickle from "../common/WhiteArtickle";
import PageHeader from "../common/PageHeading";

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

        <div style={{ height: "75vh" }} className="container">
          <object
            style={{ width: "100%", height: "100%" }}
            data="http://www.tarpininkai.eu/contracts/"
          >
            <embed
              style={{ width: "100%", height: "100%" }}
              src="http://www.tarpininkai.eu/contracts/"
            />
          </object>
        </div>
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
