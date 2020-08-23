import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar_Center from './Navbar_Center';

const image1 = "https://picsum.photos/200/300";

ReactDOM.render(
	<>
	<Navbar_Center />
	<h1 className="hello">Hello World</h1>
	<p>This is new pusmod id officia incididunt ullamco elit aliquip ullamco deserunt dolor deserunt enim aliqua elit elit mollit aliquip.</p>
	<img src={image1} alt="alternate Image" />
	</>
	, document.getElementById('root'));
