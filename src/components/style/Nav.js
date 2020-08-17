import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  flex: 18%;
  background-color: ${props => props.theme.primary};
  text-align: center;
  height: 100vh;
  position: static;
`;

export default Nav;
