import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const path = "https://picsum.photos/200/300";

ReactDOM.render(
	<>
		<h1 className="hello">Hello World</h1>
		<p>This is new pusmod id officia incididunt ullamco elit aliquip ullamco deserunt dolor deserunt enim aliqua elit elit mollit aliquip.</p>
		<img src="{path}" alt="alternate Image"></img>
	</>
, document.getElementById('root'));
