import { useEffect, useState } from 'react';
import { client } from '../../../client';

import 'swiper/css/bundle';
import Carousel from './Carousel';

const Header = () => {
	const [slides, setSlides] = useState([]);
	//const [slides2, setSlides2] = useState([]);

	useEffect(() => {
		const query = '*[_type == "carousel"]';
		//const query2 = '*[]'; // ESTO FUNCIONA! ME TRAE TODO!
		client.fetch(query).then((data: any) => setSlides(data));
		//client.fetch(query2).then((data: any) => setSlides2(data));
	}, []);


	return (
		<div id='Home' style={{ overflow: 'hidden' }}>
			<Carousel slides={slides} />
		</div>
	);
};

export default Header;
