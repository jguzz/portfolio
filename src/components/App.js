// Main componenet holding most of the websites layout.

// ==== IMPORTS ====
import React from "react";
import { Route, Switch } from "react-router-dom";
import profPic from "./profile.jpeg";
// Styled Components
import styled from "styled-components";
// ==== CSS STYLING ====
// Most styles are imported here... something I wouldn't do again for a project so small.
import '../config/style.css'

const Heading = styled.h1`
  color: ${(props) => props.theme.primary};
`;
const Home = styled.div`
  height: 100vh;
  background-image: url("https://wallpapermemory.com/uploads/795/plant-background-hd-2560x1440-138491.jpg");
  background-color: green;
  background-repeat: no-repeat;

  background-size: cover;
`;
const Nav = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 5em;
  background-color: limegreen;
`;

const ProfilePic = styled.img``;
const About = styled.div`
  height: 100vh;
  background-color: blue;
`;
const Portfolio = styled.div`
  height: 100vh;
  background-color: red;
`;
const Education = styled.div`
  height: 100vh;
  background-color: purple;
`;
const Contact = styled.div`
  height: 100vh;
  background-color: yellow;
`;

// ==== APP ====
// Has the side nav bar, and the routes for what will display in the body on the right.
function App() {
  return (
    <>
      {/* What the user sees when the land on the page */}
      <div className="home">
        Hello, my name is Joseph Guzzardo. <br /> I'm a fullstack developer.
        <br /> <button>view my work</button>
      </div >
      {/* Sticky nav that links to parts of the page */}
      <Nav></Nav>
      {/* About me */}
      <About></About>
      {/* Shows websites ive made with videos */}
      <Portfolio></Portfolio>
      {/* Education and publications */}
      <Education></Education>
      {/* Icons for social media, email form for email. */}
      <Contact></Contact>
    </>
  );
}

export default App;
