import React from "react";
import styled from "styled-components";
import Button from "./style/Button";

const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <>
      <Heading>Root</Heading>
      <Button>Click me</Button>
    </>
  );
}

export default App;
