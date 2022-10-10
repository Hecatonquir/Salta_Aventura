import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import Slides from '../FalseBackEnd/Slides';

const Header = () => {
	return (
		<div>
			<EmblaCarousel slides={Slides} />
		</div>
	);
};

export default Header;
