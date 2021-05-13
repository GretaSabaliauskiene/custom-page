import styled from "styled-components";
import COLORS from "../Colors";

const ContactsHeading = styled.h2`
  color: ${COLORS.text};
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2.6rem;
  margin-top: 7rem;
  @media screen and (max-width: 990px) {
    font-size: 3rem;
    padding: 1rem;
  }
`;

export default ContactsHeading;
