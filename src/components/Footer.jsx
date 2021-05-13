import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import COLORS from "../components/Colors";
import email from "../images/svg/e-mail.svg";
import StyledDiv from "./StyledDiv";
import phone from "../images/svg/phone.svg";
import location from "../images/svg/location.svg";
import styled from "styled-components";
import watch from "../images/svg/wh.svg";

const FooterHeading = styled.h3`
  font-family: "Roboto Slab", serif !important;
  font-weight: bold !important;
  color: white;
  font-size: 1.8rem;
`;

const FooterSpan = styled.span`
  color: ${COLORS.muted};
  font-size: 1.4rem;
`;

const FooterAnchor = styled.a`
  font-family: "Roboto Slab", serif !important;
  font-weight: bold !important;
  color: white;
  font-size: 1.8rem;
  &:hover {
    color: ${COLORS.accent};
    text-decoration: none;
  }
`;

const FooterSection = styled.section`
  @media screen and (max-width: 990px) {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${COLORS.muted};
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledDiv>
        <div className="container">
          <div className="row p-5" style={{ marginTop: "10rem" }}>
            <FooterSection className="col-lg-3 col-md-12 d-flex text-white">
              <FooterAnchor className="mr-5" href="tel:+37037363398">
                <img src={phone} alt="" />
              </FooterAnchor>
              <div>
                <FooterHeading>
                  <FooterAnchor href="tel:+37037363398">
                    +37037363398
                  </FooterAnchor>
                </FooterHeading>
                <FooterSpan> Iškilo klausimų? Skambinkite!</FooterSpan>
              </div>
            </FooterSection>
            <FooterSection className="col-lg-3 col-md-12  d-flex text-white">
              <FooterAnchor className="mr-5" href="mailto:info@tarpininkai.eu">
                <img src={email} alt="" />
              </FooterAnchor>
              <div>
                <FooterHeading>
                  <FooterAnchor href="mailto:info@tarpininkai.eu">
                    info@tarpininkai.eu
                  </FooterAnchor>
                </FooterHeading>
                <FooterSpan>info@tarpininkai.eu</FooterSpan>
              </div>
            </FooterSection>
            <FooterSection className="col-lg-3 col-md-12  d-flex text-white">
              <a
                className="mr-5"
                href="https://goo.gl/maps/FgDntTBKz2zTFn3LA"
                target="_blank"
              >
                <img src={location} alt="" />
              </a>
              <div>
                <FooterHeading>
                  <FooterAnchor
                    href="https://goo.gl/maps/FgDntTBKz2zTFn3LA"
                    target="_blank"
                  >
                    Raudondvario pl. 150, 212 kab.
                  </FooterAnchor>
                </FooterHeading>
                <FooterSpan> Kaunas, Lietuva</FooterSpan>
              </div>
            </FooterSection>

            <FooterSection className="col-lg-3 col-md-12  d-flex text-white">
              <a className="mr-5" href="tel:+37037363398">
                <img src={watch} alt="" />
              </a>
              <div>
                <FooterHeading> 9:00 - 18:00</FooterHeading>
                <FooterSpan>
                  Pirmadienis - Penktadienis. Savaigaliais ir švenčių dienomis -
                  pagal išankstinį susitarimą.
                </FooterSpan>
              </div>
            </FooterSection>
          </div>
        </div>
      </StyledDiv>
    );
  }
}

export default Footer;
