import styled from "styled-components";
import COLORS from "../Colors";

const PricePageLink = styled.a`
  text-decoration: none;
  color: ${COLORS.text};
  font-weight: 500;
  &:hover {
    color: ${COLORS.accent};
    text-decoration: none;
  }
`;

export default PricePageLink;
