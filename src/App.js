import Navigation from "./components/blocks/navigation";
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";
import MuitinesTarpininkas from "./components/pages/MuitinesTarpininkas";
import IntrastatoAtaskaitos from "./components/pages/IntrastatoAtaskaitos";
import ApieMus from "./components/pages/ApieMus";
import HomePage from "./components/pages/HomePage";
import PasirasytiSutarti from "./components/pages/PasirasytiSutarti";
import Skaiciuokle from "./components/pages/Skaiciuokle";
import SusisiekiteKontaktai from "./components/pages/SusisiekiteKontaktai";
import Kainos from "./components/pages/Kainos";
import PrivatumoPolitika from "./components/pages/PrivatumoPolitika";
import CookieConsent from "./components/common/CookieConsent";

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
      <CookieConsent />
      <Footer />
    </div>
  );
}

export default App;
