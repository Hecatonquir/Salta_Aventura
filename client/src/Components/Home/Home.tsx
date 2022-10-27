import Header from './Header/Header';
import Destinations from './Destinations/Destinations';
import Services from './Services/Services';

//import { cardProps } from '../interfaces';

const Home = ({ destinations }: any) => {
	return (
		<div id='Home'>
			<Header />
			<Services />
			<Destinations destinations={destinations} />
		</div>
	);
};

export default Home;
