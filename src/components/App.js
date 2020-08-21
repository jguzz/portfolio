// Main componenet holding most of the websites layout.

// ==== IMPORTS ====
import React from "react";
import { Route, Switch } from "react-router-dom";
import profPic from "./profile.jpeg";
// ==== CSS STYLING ====
// Most styles are imported here... something I wouldn't do again for a project so small.
import "../config/stylesheets/style.sass";

// ==== APP ====
// Has the side nav bar, and the routes for what will display in the body on the right.
function App() {
  return (
    <>
      {/* What the user sees when the land on the page */}
      <div className="home">
        Hello, my name is Joseph Guzzardo. <br /> I'm a fullstack developer.
        <br /> <button>view my work</button>
      </div>
      {/* Sticky nav that links to parts of the page */}
      <div className='nav'></div>
      {/* About me */}
      <div className='about'></div>
      {/* Shows websites ive made with videos */}
      <div className='portfolio'></div>
      {/* Education and publications */}
      <div className='education'></div>
      {/* Icons for social media, email form for email. */}
      <div className='contact'></div>
    </>
  );
}

export default App;
