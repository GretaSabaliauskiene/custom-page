import React, { Component } from "react";
import PageTitleHeading from "../PageTitleHeading";
import PageTitleBackground from "../PageTitleBackground";
import AccentBackground from "../AccentBackground";
import MutedArtickle from "../MutedArtickle";
import ArtickleH2 from "../ArtickleH2";
import IntrastatoAtaskaitosImage from "../../images/intrastato-ataskaitos-300x200.png";
import ArtickleImage from "../ArtickleImage";
import WhiteArtickle from "../WhiteArtickle";

class IntrastatoAtaskaitos extends Component {
  render() {
    return (
      <React.Fragment>
        <PageTitleBackground>
          <AccentBackground>
            <PageTitleHeading>Intrastato ataskaitos</PageTitleHeading>
          </AccentBackground>
        </PageTitleBackground>
        <div className="container">
          <WhiteArtickle>
            <p className=" mb-5">
              1993 metų sausio 1 dieną, kuomet susiformavo bendra Europos
              Sąjungos rinka, buvo įdiegta ir nauja duomenų surinkimo sistema,
              kuri buvo pavadinta Intrastatu. Itrastato sistemos tikslas yra
              rinkti duomenis iš įmonių apie prekybos srautus tarp visų Europos
              Sąjungos šalių narių. UAB „Granito“ tarpininkai profesionali
              komanda teikia Intrastato ataskaitos užpildymo ir pateikimo
              Muitinei paslaugas.
            </p>
            <p className="mb-5">
              Europos Sąjungos teisės aktai nustato Intrastato sistemos taikymą,
              o už jų nevykdymą yra numatyta administracinė atsakomybė. Jeigu
              Jums reikalingos Intrastato ataskaitos - dėl jų pildymo galite
              kreiptis į UAB „Granito“ tarpininkai. Kasmet mes pateikiame šimtus
              ataskaitų, o su mūsų klientų ratą sudaro kelios dešimtys įmonių.
              Norint patikėti mums savo įmonės Intrastato ataskaitų pateikimą -
              Jums tereikia sudaryti su mumis sutartį ir tuomet jau viskuo
              pasirūpins mūsų profesionali komanda.
            </p>
          </WhiteArtickle>
        </div>
        <MutedArtickle>
          <div className="container">
            <div className="row ">
              <div className="col text-center">
                <ArtickleH2>Intrastato ataskaitų pildymas</ArtickleH2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ArtickleImage src={IntrastatoAtaskaitosImage} alt="" />
                <p className="mb-5">
                  Dirbdami su savo klientais mes kiekvieną mėnesį primename apie
                  Intrastato duomenų surinkimą, o kasmet informuojame apie
                  sistemos ribų pasikeitimus. Į mūsų teikiamų paslaugų sąrašą
                  įeina ir tokios paslaugos kaip Intrastato prekių kodų, prekių
                  klasifikavimo, svorių patikslinimų nustatymai. UAB „Granito“
                  tarpininkai kliento pageidavimu kas mėnesį iš Jūsų įmonės
                  paims duomenų masyvus, užpildys ataskaitas ir pateiks jas
                  Muitinei.
                </p>
                <p className="mb-5">
                  UAB „Granito“ tarpininkai taip pat užtikrins, jog Intrastato
                  ataskaitos būtų įregistruotos ir patvirtintos, o atsiradus
                  papildomiems dokumentams - patikslinsime ataskaitas. Jūsų
                  įmonė tam tikrą laikotarpį nevykdys jokios eksporto-importo
                  veiklos? Tokiu atveju nemokamai pateiksime tuščias Intrastato
                  ataskaitas. Norėtumėme atkreipti dėmesį į tai, jog esant
                  poreikiui konsultuojame Intrastato ir Muitinės formalumų
                  klausimais įvežamoms ar išvežamoms prekėms iš trečiųjų šalių.
                </p>
              </div>
            </div>
          </div>
        </MutedArtickle>

        <WhiteArtickle>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <ArtickleH2>
                  Intrastato ataskaitos - tiksliai ir laiku
                </ArtickleH2>
              </div>
            </div>
            <div className="row">
              <p className="mb-5">
                Mūsų komandą sudaro profesionalūs darbuotojai, kurie padarys
                viską, jog visos reikiamos Intrastato ataskaitos būtų
                pateikiamos tiksliai ir laiku, pagal sutartyje numatytus
                terminus. Priklausomai nuo sutarties sąlygų, ataskaitų pateikimo
                kopijas bei originalus saugosime 2 metus. UAB „Granito“
                tarpininkai Jums garantuoją nepriekaištingą atliekamų darbų
                kokybę, o taip pat ir sąžiningumą, informacijos konfidencialumą
                ir profesionalias konsultacijas.
              </p>
              <p className="mb-5">
                Susidomėjote mūsų teikiamomis Intrastat ataskaitų ruošimo,
                pildymo ir pateikimo paslaugomis, tačiau norėtumėte sužinoti
                daugiau informacijos apie mūsų paslaugų kainas? Skambinkite mums
                telefonu 8 (37) 363398.
              </p>
            </div>
          </div>
        </WhiteArtickle>
      </React.Fragment>
    );
  }
}

export default IntrastatoAtaskaitos;
