import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import COLORS from "../components/Colors";
import medal from "../images/svg/medal.svg";
import professional from "../images/svg/scientist.svg";
import cogwheel from "../images/svg/cogwheel.svg";

import styled from "styled-components";

const BepefitsDiv = styled.div`
  background: ${COLORS.benefit};
`;

const BenefitsH2 = styled.h2`
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 5rem;
  padding-top: 3rem;
  text-align: center;
`;
const BenefitsH3 = styled.h3`
  font-size: 3.2rem;
  font-weight: 800;
`;

class Benefits extends Component {
  render() {
    return (
      <BepefitsDiv>
        <div className="container">
          <BenefitsH2>Kodėl verta rinktis „Granito“ tarpininkus?</BenefitsH2>
          <div className="row p-5">
            <div className="col d-flex align-items-start">
              <img className="mr-4" src={medal} alt="" />
              <BenefitsCol>
                <BenefitsH3>Ilgametė patirtis</BenefitsH3>
                <p>
                  Ilgametė UAB „Granito“ tarpininkai patirtis padės net pačiose
                  kėbliausiose situacijose. Patirtis kompanijoje kaupiama nuo
                  pat 1999 metų!
                </p>
              </BenefitsCol>
            </div>
            <div className="col d-flex align-items-start">
              <img className="mr-4" src={professional} alt="" />
              <BenefitsCol>
                <BenefitsH3>Profesionalumas</BenefitsH3>
                <p>
                  UAB „Granito“ tarpininkai sudaro tik savo srities
                  profesionalai - nuo krovėjų iki tarpininkų bei kompanijos
                  vadovų!
                </p>
              </BenefitsCol>
            </div>
            <div className="col d-flex align-items-start">
              <img className="mr-4" src={cogwheel} alt="" />
              <BenefitsCol>
                <BenefitsH3>Patikimumas</BenefitsH3>
                <p>
                  UAB „Granito“ tarpininkai visuomet siekia aukščiausių
                  rezultatų, todėl garantuojame kokybę ir patikimumą visiems
                  savo klientams!
                </p>
              </BenefitsCol>
            </div>
          </div>
        </div>
      </BepefitsDiv>
    );
  }
}

export default Benefits;
