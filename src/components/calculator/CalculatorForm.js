import styled from "styled-components";
import COLORS from "../Colors";

const CalculatorForm = styled.form`
  color: ${COLORS.text};
  font-size: 1.8rem;

  @media screen and (max-width: 990px) {
    font-size: 1.5rem;
  }
`;

export default CalculatorForm;
