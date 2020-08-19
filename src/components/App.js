// Main componenet holding most of the websites layout.

// ==== IMPORTS ====
import React from "react";
import { Route, Switch } from "react-router-dom";
// Styled Components
import styled from "styled-components";
// ==== CSS STYLING ====
// Most styles are imported here... something I wouldn't do again for a project so small.
const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;
const Home = styled.div`
  height: 100vh;
  background-color: green;
`;
const Nav = styled.div`position: -webkit-sticky;position: sticky;top: 0;height: 5em; background-color:limegreen; `;
const About = styled.div`
  height: 100vh;
  background-color: blue;`;
const Portfolio = styled.div`
  height: 100vh;
  background-color: red;`;
const Education = styled.div`
  height: 100vh;
  background-color: purple;`;
const Contact = styled.div`
  height: 100vh;
  background-color: yellow;`;

// ==== APP ====
// Has the side nav bar, and the routes for what will display in the body on the right.
function App() {
  return (
    <>
      <Home>
        Hello, my name is Joseph Guzzardo. <br /> I'm a fullstack developer.
        <br /> <button>view my work</button>
      </Home>
      <Nav></Nav>
      <About></About>
      <Portfolio></Portfolio>
      <Education></Education>
      <Contact></Contact>
    </>
  );
}

export default App;
