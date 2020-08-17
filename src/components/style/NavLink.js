import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
	color: white;
	text-decoration-line: none;
	font-size: 18px;

	&:hover {
		color: ${props => props.theme.secondary};
	}
`;

export default NavLink