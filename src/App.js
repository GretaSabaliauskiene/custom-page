import Navigation from "./components/navigation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import MuitinesTarpininkas from "./components/pages/MuitinesTarpininkas";
import IntrastatoAtaskaitos from "./components/pages/IntrastatoAtaskaitos";
import ApieMus from "./components/pages/ApieMus";
import HomePage from "./components/pages/HomePage";
import PasirasytiSutarti from "./components/pages/PasirasytiSutarti";
import Skaiciuokle from "./components/pages/Skaiciuokle";
import SusisiekiteKontaktai from "./components/pages/SusisiekiteKontaktai";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route path="/muitines-tarpininkas" component={MuitinesTarpininkas} />
      <Route path="/intrastato-ataskaitos" component={IntrastatoAtaskaitos} />
      <Route path="/pasirasyti-sutarti" component={PasirasytiSutarti} />
      <Route path="/apie-mus" component={ApieMus} />
      <Route path="/susisiekite-kontaktai" component={SusisiekiteKontaktai} />
      <Route path="/skaiciuokle" component={Skaiciuokle} />
      <Hero />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
