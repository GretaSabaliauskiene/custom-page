import Navigation from "./components/blocks/navigation";
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";
import CookieConsent from "react-cookie-consent";
import MuitinesTarpininkas from "./components/pages/MuitinesTarpininkas";
import IntrastatoAtaskaitos from "./components/pages/IntrastatoAtaskaitos";
import ApieMus from "./components/pages/ApieMus";
import HomePage from "./components/pages/HomePage";
import PasirasytiSutarti from "./components/pages/PasirasytiSutarti";
import Skaiciuokle from "./components/pages/Skaiciuokle";
import SusisiekiteKontaktai from "./components/pages/SusisiekiteKontaktai";
import Kainos from "./components/pages/Kainos";
import PrivatumoPolitika from "./components/pages/PrivatumoPolitika";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route path="/" exact component={HomePage} />
      <Route path="/muitines-tarpininkas" component={MuitinesTarpininkas} />
      <Route path="/intrastato-ataskaitos" component={IntrastatoAtaskaitos} />
      <Route path="/pasirasyti-sutarti" component={PasirasytiSutarti} />
      <Route path="/apie-mus" component={ApieMus} />
      <Route path="/susisiekite-kontaktai" component={SusisiekiteKontaktai} />
      <Route path="/skaiciuokle" component={Skaiciuokle} />
      <Route path="/kainos" component={Kainos} />
      <Route path="/privatumo-politika" component={PrivatumoPolitika} />

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
      <Footer />
    </div>
  );
}

export default App;
