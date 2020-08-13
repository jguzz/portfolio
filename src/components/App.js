import React from "react";
import styled from "styled-components";
import Button from "./style/Button";
import Body from "./style/Body";
import Nav from "./style/Nav";

const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <>
      <Wrapper>
        <Nav></Nav>
        <Body>
          <Heading>Root</Heading>
          <Button>Click me</Button>
          <Button kind="dark">Click Me</Button>
        </Body>
      </Wrapper>
    </>
  );
}

export default App;
