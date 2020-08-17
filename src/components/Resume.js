// Route for displaying my resume

// ==== IMPORTS ====
import React from "react";
import styled from "styled-components";
import SinglePage from './SinglePage'
// React PDF
import {PDFViewer, Document, Page } from "@react-pdf/renderer";
import resume from "../resume.pdf";

// ==== CSS STYLING ====
const Title = styled.h1`
  color: ${(props) => props.theme.primary};
`;
const ResumeContainer = styled.div`
  margin: auto;
`;

// ==== RESUME ====
// Displays a PDF of my Resume.
function Resume() {
  return (
    <>
      <ResumeContainer>
        <Title>Check Out my Resume</Title>
        <SinglePage pdf={resume}/>
        
      </ResumeContainer>
    </>
  );
}

export default Resume;
