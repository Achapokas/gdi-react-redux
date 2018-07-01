// Exercise 1: Render It
// render App component into app-root element

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App.jsx';

ReactDOM.render(
	<App />,
	document.getElementById('app-root')
);

