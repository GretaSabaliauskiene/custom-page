import React, { Component } from "react";
import PageTitleHeading from "../common/PageTitleHeading";
import PageTitleBackground from "../common/PageTitleBackground";
import AccentBackground from "../common/AccentBackground";
import ContactsHeading from "../contacts/ContactsHeading";
import ContactsTitle from "../contacts/ContactsTitle";
import ContactsContact from "../contacts/ContactsContact";
import cogwheel from "../../images/svg/cogwheel.svg";
import map from "../../images/svg/locationCont.svg";
import pen from "../../images/svg/pen-and-paper.svg";
import phone from "../../images/svg/phone2.svg";

class SusisiekiteKontaktai extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <PageTitleBackground>
          <AccentBackground>
            <PageTitleHeading style={{ marginBottom: "0" }}>
              Kontaktai
            </PageTitleHeading>
          </AccentBackground>
        </PageTitleBackground>
        <article>
          <div className="container">
            <ContactsHeading>Kontaktinė informacija</ContactsHeading>
            <span>Pagrindiniai UAB „Granito tarpininkai“ rekvizitai</span>
            <div className="row d-flex flex-column mt-5">
              <div className="col d-flex mb-5">
                <img className="mr-5" src={cogwheel} alt="" />
                <div>
                  <ContactsTitle>UAB „Granito tarpininkai“</ContactsTitle>
                  <ContactsContact>Įm. kodas: 135739849</ContactsContact>
                </div>
              </div>
              <div className="col d-flex mb-5">
                <img className="mr-5" src={map} alt="" />
                <div>
                  <ContactsTitle>Mus rasite:</ContactsTitle>
                  <ContactsContact>
                    Raudondvario pl. 150, 212 kab., Kaunas
                  </ContactsContact>
                </div>
              </div>
              <div className="col d-flex mb-5">
                <img className="mr-5" src={phone} alt="" />
                <div>
                  <ContactsTitle>Susisiekite telefonu:</ContactsTitle>
                  <ContactsContact>+370 37 363398</ContactsContact>
                </div>
              </div>
              <div className="col d-flex mb-5">
                <img className="mr-5" src={pen} alt="" />
                <div>
                  <ContactsTitle>Parašykite mums:</ContactsTitle>
                  <ContactsContact>info@tarpininkai.eu</ContactsContact>
                </div>
              </div>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default SusisiekiteKontaktai;
