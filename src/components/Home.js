import React from "react";
import styled from 'styled-components'
import Button from "./style/Button";

const HomeContainer = styled.div`
	text-align: center;
	margin: auto;
	display: grid;
	grid-template-rows: 1fr 4fr 1fr;
	height: 100vh;
	align-items: center;
`;

const ContactMe = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Heading = styled.div`
	display: flex;
	flex-direction: column;
`;

const Bio = styled.p``

function Home() {
  return (
    <HomeContainer>
	<Heading>
      <h1>Joseph A Guzzardo</h1>
      <h4>Full Stack Web Developer</h4>
      <h5>React | Javacript | Ruby on Rails | CSS | HTML | Java</h5>
	</Heading>
      <Bio>Telling them all about me</Bio>
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
