// Displays information to welcome the user, and inform them about me.

// ==== Imports ====
import React from "react";
import styled from "styled-components";

// ==== CSS Styling ====
const HomeContainer = styled.div`
  text-align: center;
  margin: auto;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  height: 100vh;
  align-items: center;
  overflow: scroll;
`;

const ContactMe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bio = styled.p``;

// ==== HOME ====
function Home() {
  return (
    <HomeContainer>
      {/* ME */}
      <Heading>
        <h1>Joseph A Guzzardo</h1>
        <h4>Full Stack Web Developer</h4>
        <h5>React | Javacript | Ruby on Rails | CSS | HTML | Java</h5>
      </Heading>
      {/* BIO */}
      <h1>
        Welcome to my website!
        I am a passionate and experienced developer 
        even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:
        
      </h1>
      {/* Links to contact me */}
      <ContactMe> 
        <p>Github</p>
        <p>Linkedin</p>
        <p>Email</p>
        <p>Medium</p>
      </ContactMe>
    </HomeContainer>
  );
}

export default Home;
