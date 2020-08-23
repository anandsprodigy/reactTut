import React, {Component} from 'react';
import './index.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navbar_Center.css';


export default class Navbar_Center extends Component{
	render() {
		return(
			<>
			<Navbar variant="light">
			<Nav className="mx-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Services</Nav.Link>
				<Nav.Link href="#features">Teams</Nav.Link>
				<Nav.Link href="#pricing">Contacts</Nav.Link>
			</Nav>
			</Navbar>
			</>
		);
  	}
}
