// ==== Where I will keep my articles I publish ====

// ==== Imports ====
import React from "react";
import styled from "styled-components";

// ==== CSS STYLING ====
const ArticleTitle = styled.h4`
  text-align: center;
`;
const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 30em;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  text-align: center;
`;
const ArticleImage = styled.img``;
const Container = styled.div`
  display: block;
`;
const TitleContainer = styled.div`
  width: 100vmin;
  margin: auto;
`;

// ==== Articles ====
// Layout with CSS Grid
function Articles() {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Articles I've Written</Title>
        </TitleContainer>
        <ArticleContainer>
          <ArticleTitle>
            Begginers Guide to Setting Up and Using React-Bootstrap
          </ArticleTitle>
          <ArticleTitle>How to make a Login With Bulma</ArticleTitle>
          <ArticleTitle>Into to Ant Design</ArticleTitle>
          <ArticleTitle>Into to Phaser for Javascript</ArticleTitle>
          <ArticleTitle>
            Creating the Original Pong using Javascript
          </ArticleTitle>
        </ArticleContainer>
      </Container>
    </>
  );
}

export default Articles;
