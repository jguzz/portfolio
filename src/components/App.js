import React from "react";
import styled from "styled-components";
import Button from "./style/Button";
import Body from "./style/Body";
import Nav from "./style/Nav";
import Wrapper from "./style/Wrapper";
import Link from "./style/Link";

const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <>
      <Wrapper>
        <Nav>
          <Link>Nav</Link>
          <Link>Nav</Link>
          <Link>Nav</Link>
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
