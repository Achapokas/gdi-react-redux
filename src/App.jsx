import React from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';

// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of App
// import Header and Hompage
// include them inside of App
// export the App component!

const App = () => {
	return (
		<div className="App">
			<Header />
			<HomePage />
		</div>
	)
}

export default App
