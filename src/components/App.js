// Main componenet holding most of the websites layout.

// ==== IMPORTS ====
import React from "react";
import { Route, Switch } from "react-router-dom";
import profPic from "./profile.jpeg";
// ==== CSS STYLING ====
// Most styles are imported here... something I wouldn't do again for a project so small.
import "../config/stylesheets/style.sass";
// ==== ICONS ====

import { GiTriforce } from "react-icons/gi";

// ==== APP ====
// Has the side nav bar, and the routes for what will display in the body on the right.
function App() {
  return (
    <div className="wrapper">
      {/* What the user sees when the land on the page */}
      <div id="home" className="home">
        <p>
          Joseph A Guzzardo <br /> Full Stack Engineer
          <div className="cursor" />
        </p>
      <GiTriforce className="triforce" />
      </div>
      {/* Sticky nav that links to parts of the page */}
      <div className="nav">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

      </div>
      {/* About me */}
      <div id="about" className="about"></div>
      {/* Shows websites ive made with videos */}
      <div id="portfolio" className="portfolio"></div>
      {/* Education and publications */}
      <div id="education" className="education"></div>
      {/* Icons for social media, email form for email. */}
      <div id="contact" className="contact"></div>
    </div>
  );
}

export default App;
