import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import { urlFor } from '../../client';
import MasonryImageList from './MasonryImageList';
import goToID from '../goToID';
import { useEffect } from 'react';

export default function DestinationDetail({ destinations }: any) {
	const params = useParams();
	const { ID } = params;
	const destination = destinations.filter((des: any) => {
		return des._id === ID;
	})[0];

	useEffect(() => {
		goToID('Detail');
	}, []);

	const src = urlFor(destination.images[destination.images.length - 1]).url();

	const mainFeaturedPost = {
		title: destination.name,
		image: src,
		imageText: destination.name,
	};

	return (
		<Container id='Detail' maxWidth='xl' sx={{ pt: 3, mt: 7, bgcolor: 'var(--color-brown1)' }}>
			<main>
				<MainFeaturedPost post={mainFeaturedPost} />
				<Grid container spacing={2}>
					<Grid item xs={12} md={8}>
						<MasonryImageList slides={destination.images} />
					</Grid>
					<Grid item xs={12} md={4}>
						<Sidebar destination={destination} />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Main destination={destination} />
				</Grid>
			</main>
		</Container>
	);
}
