import styled from "styled-components";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../images/muitines-tarpininkas.jpg";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const HeroHeading = styled.h1`
  color: white;
  font-size: 6.6rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  @media screen and (max-width: 990px) {
    font-size: 5rem;
  }
`;

const HeroContainer = styled.div`
  padding: 8rem 1.5rem;
  background-color: rgba(0, 148, 119, 0.5);
  background-repeat: no-repeat;
  @media screen and (max-width: 990px) {
    padding: 2rem 0.5rem;
  }
`;

class Hero extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="container">
          <HeroContainer>
            <div className="animate__animated animate__fadeInUp">
              <HeroHeading>Muitinės tarpininkai</HeroHeading>
              <Paragraph>
                Profesionalų komanda, kurios nariai turi didžiulę patirtį
                muitinės tarpininkavimo srityje. Mes puikiai išmanome savo
                darbą, todėl dirbame operatyviai ir kokybiškai!
              </Paragraph>
            </div>

            <div class="animate__animated animate__fadeInLeft">
              {" "}
              <Button>Tarpininkavimo paslaugos &gt;</Button>
            </div>
          </HeroContainer>
        </div>
      </div>
    );
  }
}

export default Hero;
