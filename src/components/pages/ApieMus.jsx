import React, { Component } from "react";
import PageTitleHeading from "../common/PageTitleHeading";
import PageTitleBackground from "../common/PageTitleBackground";
import AccentBackground from "../common/AccentBackground";
import WhiteArtickle from "../common/WhiteArtickle";
import MutedArtickle from "../common/MutedArtickle";
import ArtickleH2 from "../common/ArtickleH2";
import Avatar from "../avatar/Avatar";
import Algimantas from "../../images/algimantas.jpg";
import Antanas from "../../images/antanas-300x290.jpg";
import Ruta from "../../images/ruta.jpg";
import AvatarTitle from "../avatar/AvatarTitle";
import AvatarHeading from "../../components/avatar/AvatarHeading";
import AvatarContacts from "../avatar/AvatarContacts";
import styled from "styled-components";

const AvatarHolder = styled.div`
  @media screen and (max-width: 1199px) {
    margin-bottom: 4rem;
  }
`;

class ApieMus extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageTitleBackground>
          <AccentBackground>
            <PageTitleHeading>Apie mus</PageTitleHeading>
          </AccentBackground>
        </PageTitleBackground>
        <WhiteArtickle>
          <div className="container">
            <p className="mb-5">
              UAB „Granito“ tarpininkai savo veiklą pradėjo dar 1999 metais.
              Mūsų komandą sudaro profesionalų komanda, kuri yra pasiryžusi ne
              tik atsakyti į visus Jums iškilusius klausimus, tačiau ir skirs
              visą savo dėmesį Jūsų poreikiams patenkinti.{" "}
            </p>
            <p className="mb-5">
              Profesionalios konsultacijos, profesionalūs patarimai, puikus
              kainos ir kokybės santykis - tai yra vieni iš UAB „Granito“
              tarpininkų privalumų. Mūsų komanda vadovaujasi principu, jog
              visuomet yra galimybių tobulėti, todėl to nuolatos ir siekiame.
              Dėka šio principo galime drąsiai teigti, jog esame vieni geriausių
              šioje rinkoje!{" "}
            </p>
            <p className="mb-5">
              UAB „Granito“ tarpininkai nuolatos plečia savo klientų ratą ir
              siekia tapti ilgalaikiu paslaugų tiekėju kiekvienam klientui.
              Tikime, kad nuolatos didėjantį klientų ratą lemia tai, jog visos
              mūsų paslaugos suteikiamos laiku, tiksliai ir už tinkamą kainą.
              Prie to, žinoma, prisideda ir tikrų profesionalų komanda bei jos
              nuolatinis tobulėjimas!
            </p>
          </div>
        </WhiteArtickle>
        <MutedArtickle>
          <div className="container">
            <div className="row ">
              <div className="col text-center">
                <ArtickleH2>UAB „Granito“ tarpininkai</ArtickleH2>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
            </div>
          </div>
          <div className="row">
            <AvatarHolder className="col-lg-4 col-md-12 text-center">
              <Avatar src={Algimantas} alt="" />
              <AvatarHeading>Algimantas</AvatarHeading>
              <AvatarTitle>Direktorius</AvatarTitle>
              <AvatarContacts>+370 611 24074</AvatarContacts>
              <AvatarContacts>algis@tarpininkai.eu</AvatarContacts>
            </AvatarHolder>
            <AvatarHolder className="col-lg-4 col-md-12 text-center">
              <Avatar src={Antanas} alt="" />
              <AvatarHeading>Antanas</AvatarHeading>
              <AvatarHeading>Komercijos direktorius</AvatarHeading>

              <AvatarContacts>+370 686 13395</AvatarContacts>
              <AvatarContacts>antanas@tarpininkai.eu</AvatarContacts>
            </AvatarHolder>
            <AvatarHolder className="col-lg-4 col-md-12 text-center">
              <Avatar src={Ruta} alt="" />
              <AvatarHeading>Rūta</AvatarHeading>
              <AvatarTitle>Muitinės tarpininko atstovė</AvatarTitle>
              <AvatarContacts>+370 643 05522</AvatarContacts>
              <AvatarContacts>ruta@tarpininkai.eu</AvatarContacts>
            </AvatarHolder>
          </div>
        </MutedArtickle>
      </React.Fragment>
    );
  }
}

export default ApieMus;
