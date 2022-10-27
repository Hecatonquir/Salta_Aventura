import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import { client } from './client';
import DestinationDetail from './Components/DestinationDetail/DestinationDetail';

import './Styles/App.css';

function App() {
	const [destinations, setDestinations] = useState([]);

	const [contact, setContact] = useState([]);

	useEffect(() => {
		const dest = '*[_type == "paquete"]';
		const cont = '*[_type == "contact"]';

		client.fetch(dest).then((data: any) => setDestinations(data));
		client.fetch(cont).then((data: any) => setContact(data));
	}, []);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home destinations={destinations} />} />
				<Route path='/FAQ' element={<Faq />} />

				<Route path='/Destination/:ID' element={<DestinationDetail destinations={destinations} />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
