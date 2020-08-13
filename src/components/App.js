import React from "react";
// React Router
import { Route, Switch, Link } from "react-router-dom";
// Styled Components
import styled from "styled-components";
import Body from "./style/Body";
import Nav from "./style/Nav";
import Wrapper from "./style/Wrapper";
import NavLink from "./style/NavLink";
import Profile from "./style/Profile";
import profPic from "./profile.jpeg";
// React Components
import Home from './Home'
import Projects from './Projects'
import Articles  from './Articles'
import Resume from './Resume'

const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <>
      <Wrapper>
        <Nav>
          <Profile
            src={profPic}
            alt="Photo of Joseph Guzzardo Softare Engineer"
          />
          <Link  to="/projects">Projects</Link>
          <Link  to="/articles">Articles</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/home">About Me / Home</Link>
        </Nav>
        <Body>
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/articles" render={() => <Articles />} />
            <Route path="/resume" render={() => <Resume />} />
          </Switch>
        </Body>
      </Wrapper>
    </>
  );
}

export default App;
