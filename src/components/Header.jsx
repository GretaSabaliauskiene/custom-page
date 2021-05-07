import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import phone from "../images/svg/phone.svg";
import location from "../images/svg/location.svg";
import watch from "../images/svg/wh.svg";
import InfoCol from "../components/Info";
import HeaderHeading from "../components/HeaderHeading";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header-info">
          <div className="row ">
            <div className="col-lg-4 col-md-12">
              <img src={logo} alt="" />
            </div>
            <div className="col d-flex header-info__contacts justify-content-between">
              <div className="d-flex align-items-center ">
                <a href="tel:+37037363398">
                  <img src={phone} alt="" />
                </a>
                <InfoCol>
                  <HeaderHeading>+370 37 363398</HeaderHeading>
                  <span>info@tarpininkai.eu</span>
                </InfoCol>
              </div>
              <div className="d-flex align-items-center">
                <a href="https://goo.gl/maps/FgDntTBKz2zTFn3LA" target="_blank">
                  <img src={location} alt="" />
                </a>
                <InfoCol>
                  <HeaderHeading>Raudondvario pl. 150, 212 kab.</HeaderHeading>
                  <span>Kaunas, Lietuva</span>
                </InfoCol>
              </div>
              <div className="d-flex align-items-center">
                <img src={watch} alt="" />
                <InfoCol>
                  <HeaderHeading>9:00-18:00</HeaderHeading>
                  <span>I-V</span>
                </InfoCol>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
