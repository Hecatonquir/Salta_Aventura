import React from 'react';
import { MainDiv } from '../Styles/globalComponents';
import CardDestination from './CardDestination';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { destinations } from '../FalseBackEnd/Destinations';

const Main = () => {
	return (
		<MainDiv
			dark
			style={
				{
					/* backgroundColor: 'red', */
				}
			}>
			<Box
				sx={{
					bgcolor: 'background.paper',
					pt: 6,
					pb: 4,
				}}>
				<Container maxWidth='sm'>
					<Typography component='h1' variant='h2' align='center' color='text.primary' gutterBottom>
						Tour Packages
					</Typography>
					<Typography variant='h5' align='center' color='text.secondary' paragraph>
						Something short and leading about the collection below—its contents, the creator, etc. Make
						it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
					</Typography>
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth='lg'>
				{/* End hero unit */}
				<Grid container spacing={4}>
					{destinations.map((destination) => (
						<Grid item key={destination.title} xs={12} sm={6} md={4} lg={3}>
							<CardDestination destination={destination} />
						</Grid>
					))}
				</Grid>
			</Container>
		</MainDiv>
	);
};

export default Main;
