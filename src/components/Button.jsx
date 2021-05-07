import styled from "styled-components";
import COLORS from "../components/Colors";

const Button = styled.button`
  padding: 18px 30px;
  background: ${COLORS.primary};
  color: white;
  outline: none;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  &:hover {
    background: white;
    color: black;
    transition: 0.4s;
  }
  @media screen and (max-width: 990px) {
    font-size: 1.4rem;
    padding: 14px 20px;
  }
`;

export default Button;
