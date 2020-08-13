import React from "react";
import styled from "styled-components";
import Button from "./style/Button";
import Body from "./style/Body";
import Nav from "./style/Nav";
import Wrapper from "./style/Wrapper";
import Link from "./style/Link";
import Profile from './style/Profile'
import profPic from './profile.jpeg'

const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <>
      <Wrapper>
        <Nav>
          <Profile src={profPic} alt='Photo of Joseph Guzzardo Softare Engineer'/>
          <Link>About Me</Link>
          <Link>Projects</Link>
          <Link>Articles</Link>
          <Link>Contact Me</Link>
        </Nav>
        <Body>
          <Button>Click me</Button>
          <Button kind="dark">Click Me</Button>
        </Body>
      </Wrapper>
    </>
  );
}

export default App;
