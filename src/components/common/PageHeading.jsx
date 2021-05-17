import React from "react";
import styled from "styled-components";
import PageTitleBackground from "./PageTitleBackground";
import COLORS from "../Colors";

const PageTitleHeading = styled.h1`
  color: white;
  font-weight: 200;
  font-size: 4.2rem;
  padding: 6rem;
  text-align: center;
  margin-bottom: 6rem;
`;

const AccentBackground = styled.div`
  background-color: ${COLORS.accentBackground};
`;

const PageHeader = ({ label }) => {
  return (
    <PageTitleBackground>
      <AccentBackground>
        <PageTitleHeading>{label}</PageTitleHeading>
      </AccentBackground>
    </PageTitleBackground>
  );
};

export default PageHeader;
