import styled from "styled-components";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../../images/muitines-tarpininkas.jpg";
import Button from "../common/Button";
import Paragraph from "../../components/common/Paragraph";
import small from "../../images/muitines-tarpininkas.700.jpg";
import medium from "../../images/muitines-tarpininkas.medium.jpg";

const HeroHeading = styled.h1`
  color: white;
  font-size: 6.6rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  @media screen and (max-width: 990px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${heroImage});

  @media screen and (max-width: 600px) {
    background-image: url(${small});
  }
  @media screen and (min-width: 600px) {
    background-image: url(${medium});
  }
  @media screen and (min-width: 991px) {
    background-image: url(${heroImage});
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
      <BackgroundImage>
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
              <Button href="/muitines-tarpininkas">
                Tarpininkavimo paslaugos &gt;
              </Button>
            </div>
          </HeroContainer>
        </div>
      </BackgroundImage>
    );
  }
}

export default Hero;
