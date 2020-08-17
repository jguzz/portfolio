// Displays all the main projects I have with video demos

// ==== IMPORTS ====
import React from "react";
import styled from "styled-components";

// ==== CSS STYLING ====
const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  width: 100vh;
  flex: 82%;
`;

const ProjLink = styled.a`
  flex-grow: 1;
  color: ${(props) => props.theme.primary};
  padding-right: 2em;
  padding-left: 2em;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

// ==== PROJECTS ====
// Shows all the web apps I've created, with links to relevant sites\
function Projects() {
  return (
    // Arandged using flexbox
    <ProjectContainer>
      <Heading>Projects</Heading>
      <h4>Plantstory</h4>
      <ProjectLinks>
        <ProjLink href="">Front-End</ProjLink>
        <ProjLink href="">Back-End</ProjLink>
        <ProjLink href="">Video Demo</ProjLink>
      </ProjectLinks>
      <p>Here is a bunch of information about my project</p>
      <h4>Youtube Clone</h4>
      <ProjectLinks>
        <ProjLink href="">Front-End</ProjLink>
        <ProjLink href="">Back-End</ProjLink>
        <ProjLink href="">Video Demo</ProjLink>
      </ProjectLinks>
      <p>Here is a bunch of information about my project</p>
      <h4>Movie Review Website</h4>
      <ProjectLinks>
        <ProjLink href="">Front-End</ProjLink>
        <ProjLink href="">Back-End</ProjLink>
        <ProjLink href="">Video Demo</ProjLink>
      </ProjectLinks>
      <p>Here is a bunch of information about my project</p>
    </ProjectContainer>
  );
}

export default Projects;
