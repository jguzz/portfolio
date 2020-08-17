import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.primary}
`;
const ResumeContainer = styled.div`
  margin: auto;
`;

function Resume() {
  return (
    <>
      <ResumeContainer>
        <Title>Check Out my Resume</Title>
      </ResumeContainer>
    </>
  );
}

export default Resume;
