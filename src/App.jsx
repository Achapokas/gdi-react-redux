// Exercise 2: Set It Up
	// write a functional component
	// make it a div with a class name of App
	// import Header and Hompage
	// include them inside of App
	// export the App component!

import React from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
