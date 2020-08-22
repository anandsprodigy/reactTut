import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/200/300";
const image3 = "https://picsum.photos/200/300";

ReactDOM.render(
	<>
	<Navbar bg="light" variant="light">
	<Navbar.Brand href="#home">Navbar</Navbar.Brand>
	<Nav className="mr-auto">
		<Nav.Link href="#home">Home</Nav.Link>
		<Nav.Link href="#features">Services</Nav.Link>
		<Nav.Link href="#features">Team</Nav.Link>
		<Nav.Link href="#pricing">Contacts</Nav.Link>
	</Nav>
	</Navbar>
	<h1 className="hello">Hello World</h1>
	<p>This is new pusmod id officia incididunt ullamco elit aliquip ullamco deserunt dolor deserunt enim aliqua elit elit mollit aliquip.</p>
	<img src={image1} alt="alternate Image" />
	<img src={image2} alt="alternate Image" />
	<img src={image3} alt="alternate Image" />
	</>
	, document.getElementById('root'));
