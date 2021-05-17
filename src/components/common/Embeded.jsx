import styled from "styled-components";

const EmbededDiv = styled.div`
  font-size: 1.8rem;

  @media screen and (max-width: 2500px) {
    height: 75vh;
  }
  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

const Embeded = () => {
  return (
    <EmbededDiv className="container">
      <object
        style={{ width: "100%", height: "100%" }}
        data="http://www.tarpininkai.eu/contracts/"
      >
        <embed
          style={{ width: "100%", height: "100%" }}
          src="http://www.tarpininkai.eu/contracts/"
        />
      </object>
    </EmbededDiv>
  );
};
export default Embeded;
