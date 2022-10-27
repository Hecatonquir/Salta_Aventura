import { MainDiv } from '../../../Styles/globalComponents';
import CardDestination from './CardDestination';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { cardProps } from '../../interfaces';

const Destinations = ({ destinations }: cardProps) => {
	return (
		<MainDiv
			id='Destinos'
			style={{
				backgroundColor: 'var(--color-pink1)',
				overflow: 'hidden',
			}}>
			<Typography
				component='h1'
				variant='h2'
				align='center'
				color='text.primary'
				sx={{
					fontWeight: '400',
					display: 'flex',
					justifyContent: 'flex-end',
					mr: 3,
					mt: 1,
				}}>
				De
				<u
					style={{
						textDecoration: 'underline solid var(--color-blue3) 5px',
						textUnderlineOffset: '10px',
					}}>
					stinos
				</u>
			</Typography>
			<Container sx={{ py: 8 }} maxWidth='xl'>
				<Grid container spacing={2}>
					{destinations.map((destination) => (
						<Grid item key={destination._id} xs={12}>
							<CardDestination destination={destination} />
						</Grid>
					))}
				</Grid>
			</Container>
		</MainDiv>
	);
};

export default Destinations;
