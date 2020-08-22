import React, {Component} from 'react';
import './index.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class Navbar_Center extends Component{
	render() {
		return(
			<>
			<Navbar bg="light" variant="light">
			<Nav className="mx-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Services</Nav.Link>
				<Nav.Link href="#features">Team</Nav.Link>
				<Nav.Link href="#pricing">Contacts</Nav.Link>
			</Nav>
			</Navbar>
			</>
		);
  	}
}