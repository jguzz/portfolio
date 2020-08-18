// Main componenet holding most of the websites layout.

// ==== IMPORTS ====
import React from "react";
import { Route, Switch } from "react-router-dom";
// Styled Components
import styled from "styled-components";
import Body from "./style/Body";
import Nav from "./style/Nav";
import Wrapper from "./style/Wrapper";
import NavLink from "./style/NavLink";
import Profile from "./style/Profile";
import profPic from "./profile.jpeg";
// React Components
import Home from "./Home";
import Projects from "./Projects";
import Articles from "./Articles";
import Resume from "./Resume";

// ==== CSS STYLING ====
// Most styles are imported here... something I wouldn't do again for a project so small.
const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

// ==== APP ====
// Has the side nav bar, and the routes for what will display in the body on the right.
function App() {
  return (
    <>
      <Wrapper>
        {/* Side Nav */}
        <Nav>
          <Profile
            src={profPic}
            alt="Photo of Joseph Guzzardo Softare Engineer"
          />

          <NavLink to="/portfolio/home">About Me / Home</NavLink>
          <NavLink to="/portfolio/projects">Projects</NavLink>
          <NavLink to="/portfolio/articles">Articles</NavLink>
          <NavLink to="/portfolio/resume">Resume</NavLink>
        </Nav>
        {/* Main Body that will display content with router */}
        <Body>
          <Switch>
            <Route path="/portfolio/home" render={() => <Home />} />
            <Route path="/portfolio/projects" render={() => <Projects />} />
            <Route path="/portfolio/articles" render={() => <Articles />} />
            <Route path="/portfolio/resume" render={() => <Resume />} />
          </Switch>
        </Body>
      </Wrapper>
    </>
  );
}

export default App;
