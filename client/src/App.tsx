import React from 'react';
import Navbar from './Components/01-Navbar';
import Header from './Components/02-Header';
import Services from './Components/03-Services';
import Main from './Components/04-Main';
import Footer from './Components/05-Footer';
import './Styles/App.css';

function App() {
	return (
		<>
			<Header />
			<Navbar />
			<Services />
			<Main />
			<Footer />
		</>
	);
}

export default App;
