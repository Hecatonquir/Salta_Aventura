import React from 'react';
import { MainDiv } from '../../../Styles/globalComponents';
import CardServices from './CardServices';
import { services } from '../../../FalseBackEnd/services';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Services = () => {
	return (
		<MainDiv
			id='Servicios'
			style={{
				minHeight: 'fit-content',
				backgroundColor: 'var(--color-white4)',
			}}>
			<Typography
				component='h1'
				variant='h2'
				align='center'
				color='text.primary'
				sx={{
					fontWeight: '400',
					display: 'flex',
					justifyContent: 'flex-start',
					ml: 3,
					mt: 1,
				}}>
				<u
					style={{
						textDecoration: 'underline solid var(--color-pink2) 5px',
						textUnderlineOffset: '10px',
					}}>
					Servic
				</u>
				ios
			</Typography>

			<Grid container spacing={1} sx={{ padding: '1rem 0.5rem', paddingTop: 1 }}>
				{services.map((post, i) => (
					<Grid
						key={i}
						xs={6}
						md={3}
						sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<CardServices key={post.title} post={post} />
					</Grid>
				))}
			</Grid>
		</MainDiv>
	);
};

export default Services;
