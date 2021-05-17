import React, { Component } from "react";
import WhiteArtickle from "../common/WhiteArtickle";
import MutedArtickle from "../common/MutedArtickle";
import ArtickleH2 from "../common/ArtickleH2";
import MuitinesTarpininkasImage from "../../images/muitines-tarpininkas-300x200.png";
import ArtickleImage from "../common/ArtickleImage";
import TirCarnetImage from "../../images/tir-carnet-300x200.png";
import PricePageLink from "../PricePageLink";
import PageHeader from "../common/PageHeading";

class MuitinesTarpininkas extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageHeader label="Muitinės tarpininkai" />
        <WhiteArtickle>
          <div className="container">
            <p className="mb-5">
              UAB „Granito“ tarpininkai sudarė tik profesionalūs savo sričių
              specialistai, todėl kiekvienas mūsų muitinės tarpininkas suteiks
              itin profesionalią paslaugą ar konsultaciją. Mes Jums galime
              pasiūlyti kokybiškas ir operatyvias tarpininkavimo muitinėje,
              muitinės deklaracijos pildymo, TIR Carnet įforminimo ar CMR
              pildymo paslaugas. Siūlome detaliau susipažinti su šiomis mūsų
              teikiamomis paslaugomis.
            </p>
          </div>
        </WhiteArtickle>
        <MutedArtickle>
          <div className="container">
            <div className="row ">
              <div className="col text-center">
                <ArtickleH2>Muitinės tarpininkas ir paslaugos</ArtickleH2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ArtickleImage
                  style={{ float: "left", margin: "0 2.8rem 2.8rem 0" }}
                  src={MuitinesTarpininkasImage}
                  alt=""
                />
                <p className="mb-5">
                  UAB „Granito“ tarpininkai teikia profesionalias tarpininkavimo
                  muitinėje paslaugas. Ilgametė patirtis šioje srityje suteikia
                  galimybę savo klientams pasiūlyti kokybiškas, operatyvias ir
                  visus muitinės teisės aktus atitinkančias paslaugas. Mūsų
                  muitinės tarpininkas padės Jums užpildyti bendruosius
                  administracinius dokumentus importo, eksporto ar tranzito
                  procedūroms. Esant poreikiui - atstovaujame savo klientams
                  muitinėje pagal Muitinės tarpininko paslaugų teikimo sutartį.
                </p>
                <p className="mb-5">
                  Mūsų muitinės tarpininkas pasirūpins visomis muitinės
                  procedūromis, pateiks reikiamus prašymus, paims prekių
                  pavyzdžius ar mėginius, o jeigu reikės ir padės suruošti
                  prekių kilmės sertifikatus. Verta paminėti ir tai, jog mūsų
                  ilgametė patirtis šioje srityje suteikia galimybę teikti
                  garantijas importo bei tranzito procedūroms. Mūsų profesionali
                  muitinės tarpininkų komanda atsižvelgdama į klientų
                  pageidavimus nustatys jų poreikius ir suteiks visas
                  rekomendacijas dėl tikslinių muitinės procedūrų, o iškilus
                  papildomiems klausimams - visuomet į juos atsakys bei suteiks
                  patirtimi ir nuolat atnaujinamomis žiniomis paremtą
                  konsultaciją.
                </p>
              </div>
            </div>
          </div>
        </MutedArtickle>

        <WhiteArtickle>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <ArtickleH2>TIR Carnet įforminimas</ArtickleH2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ArtickleImage src={TirCarnetImage} alt="" />

                <p className="mb-5">
                  TIR Carnet - TIR konvencijos šalių pripažįstamas tarptautiniu
                  maršrutu gabenamų prekių dokumentas. Šią konvenciją šiuo metu
                  jungia 68 susitariančiosios šalys, o tai apima visą Europą,
                  dalį Artimųjų ir Vidurio Rytų, Šiaurės Afrikos, o tarp
                  susitarimo šalių patenka JAV, Kanada, Čilė bei Urugvajus. Mūsų
                  muitinės tarpininkas supildys TIR Carnet ir atstovaus Jus
                  muitinėje teikiant elektronines deklaracijas NCTS sistemoje.
                  Tiesa, šio dokumento įforminimas pradedamas išvykimo šalyje, o
                  išvykimo, tranzito ir paskirties šalyse jis naudojamas kaip
                  TIR procedūros kontrolės dokumentas.
                </p>
              </div>
            </div>
          </div>
        </WhiteArtickle>
        <MutedArtickle>
          <div className="container">
            <div className="row ">
              <div className="col text-center">
                <ArtickleH2>CMR važtaraščių pildymas</ArtickleH2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="mb-5">
                  CMR važtaraštis - tarptautinės krovinių transportavimo
                  sutarties tiesioginis įrodymas, kuris patvirtina apie laiku
                  pristatytą ir nesugadintą krovinį. Kitaip sakant, CMR
                  važtaraštis yra tiesioginis įrodymas, jog krovinys sėkmingai
                  pasiekė klientą. UAB „Granito“ muitinės tarpininkai savo
                  klientams gali sėkmingai užpildyti šį dokumentą.
                </p>
                <p className="mb-5">
                  Verta žinoti tai, jog tvarkingai užpildytame CMR važtaraštyje
                  pateikiama informacija apie įmones, kurios siunčia bei turi
                  gauti krovinius. Formoje taip pat nurodomas tikslus vežamo
                  krovinio kiekis bei rūšis, vežėjo transporto priemonės
                  registracijos numeris bei kiti vežėjo duomenys. Mūsų muitinės
                  tarpininkas ne tik teisingai paruoš CMR važtaraštį, tačiau ir
                  garantuos, jog tai atlikta tinkamai, pagal visus reikalavimus.
                </p>
              </div>
            </div>
          </div>
        </MutedArtickle>
        <WhiteArtickle>
          <div className="container">
            <p className="mb-5">
              Susidomėjote mūsų teikiamomis muitinės tarpininko paslaugomis,
              tačiau norėtumėte sužinoti daugiau informacijos apie mūsų paslaugų
              <PricePageLink href="./kainos"> kainas</PricePageLink>?
              Skambinkite mums telefonu 8 (37) 363398
            </p>
          </div>
        </WhiteArtickle>
      </React.Fragment>
    );
  }
}

export default MuitinesTarpininkas;
