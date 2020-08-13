import styled from "styled-components";

const Button = styled.button`
  background-color:  ${props => props.theme.primary};
  border: none;
  
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 2px;
  transition: background-color .25s, color 1.00s;

  ${props => {
	switch (props.kind) {
		case "dark": 
		return "color: black;"
		case 'light': 
		return 'color: white;'
	}
	return 'color: white;'
  }}

  &:hover {
	  color:  ${props => props.theme.primary};
	  background-color: white;
	  cursor: pointer;
  }
`;

export default Button