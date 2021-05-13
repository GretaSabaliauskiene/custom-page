import styled from "styled-components";
import COLORS from "../Colors";

const ContactsContact = styled.h5`
  color: ${COLORS.text};
  font-size: 2.4rem;
  font-weight: 700;
  @media screen and (max-width: 990px) {
    font-size: 2rem;
    padding: 0.8rem;
  }
`;

export default ContactsContact;
