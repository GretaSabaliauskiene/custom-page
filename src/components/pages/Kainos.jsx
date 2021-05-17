import React, { Component } from "react";
import WhiteArtickle from "../common/WhiteArtickle";
import styled from "styled-components";
import COLORS from "../Colors";
import PageHeader from "../common/PageHeading";

const PriceTableHeading = styled.thead`
  background: #f3f4f6 !important;
  font-family: "Roboto Slab";
  font-weight: bold;
  color: ${COLORS.text};
  padding: 2rem;
  border-color: none;
`;

class Kainos extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageHeader label="Kainos" />
        <WhiteArtickle>
          <div className="container">
            <p mb-5>
              UAB „Granito“ tarpininkai teikia tik kokybiškas bei itin
              profesionalias muitinės tarpininkavimo paslaugas. Žemiau esančioje
              lentelėje galite susipažinti su bazinėmis paslaugų kainomis,
              kuriomis vadovaujasi kiekvienas mūsų muitinės tarpininkas.
              Neradote paslaugos, kurios ieškote? O gal turite papildomų
              klausimų? Visuomet galite pasinaudoti puslapyje pateikiamais
              kontaktais ir mes atsakysime į visus Jūsų klausimus bei rasime
              tinkamiausią individualų sprendimą Jums!
            </p>

            <table style={{ color: "#87878d" }} className="table mt-5 pt-5">
              <PriceTableHeading className="thead-light">
                <tr className="heading-row">
                  <th className="default-col p-4">Paslauga </th>
                  <th className="default-col p-4">Mato vnt. </th>
                  <th className="default-col p-4">Kaina, EUR </th>
                </tr>
              </PriceTableHeading>
              <tr className="default-row" style={{ border: "none" }}>
                <td className="default-col">Tarpininkavimas muitinėje </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">20 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">
                  Muitinės deklaracijos pildymas (esant vienai prekei){" "}
                </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">15 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">
                  Muitinės deklaracijos papildoma prekė{" "}
                </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">3 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">TIR CARNET įforminimas </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">15 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">CMR pildymas </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">10 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">Vertės deklaracijos pildymas </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">3 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">
                  Vertės deklaracijos papildomo lapo pildymas{" "}
                </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">3 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">Pakavimo lapo ruošimas </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">10 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">
                  Krovinio dokumentų performinimas muitinės sandelyje{" "}
                </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">70 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">Kopijavimo paslaugos </td>
                <td className="default-col">1 lapas </td>
                <td className="default-col">1 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">
                  Fakso siuntimas/gavimas Lietuvoje{" "}
                </td>
                <td className="default-col">1 lapas </td>
                <td className="default-col">1 EUR </td>
              </tr>
              <tr className="default-row">
                <td className="default-col">
                  Foto nuotrauka (transporto priemonės, prekės, pakuotės ir
                  pan.){" "}
                </td>
                <td className="default-col">vnt. </td>
                <td className="default-col">2 EUR </td>
              </tr>
            </table>
          </div>
        </WhiteArtickle>
      </React.Fragment>
    );
  }
}

export default Kainos;
