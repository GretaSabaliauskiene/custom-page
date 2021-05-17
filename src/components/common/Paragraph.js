import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 2.4rem;
  color: white;
  width: 70%;
  padding: 3rem 0;
  @media screen and (max-width: 990px) {
    font-size: 2rem;
    padding: 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export default Paragraph;
