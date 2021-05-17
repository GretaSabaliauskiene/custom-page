import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";

class CookieConcent extends Component {
  state = {};
  render() {
    return (
      <CookieConsent
        location="bottom"
        buttonText="Sutinku"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Informuojame, kad šioje svetainėje naudojami slapukai (angl. cookies).
        Paspaudę mygtuką „Sutinku“ arba naršydami toliau patvirtinsite savo
        sutikimą. Bet kada galėsite atšaukti savo sutikimą pakeisdami interneto
        naršyklės nustatymus ir ištrindami įrašytus slapukus.
        <a
          style={{ textDecoration: "none", color: "white" }}
          className="ml-3"
          href="/privatumo-politika"
        >
          Privatumo politika
        </a>
      </CookieConsent>
    );
  }
}

export default CookieConcent;
