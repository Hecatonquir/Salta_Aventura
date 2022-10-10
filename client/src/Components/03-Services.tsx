/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MainDiv } from '../Styles/globalComponents';
import CardServices from './CardServices';
import { services } from '../FalseBackEnd/services';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

const Services = () => {
	return (
		<MainDiv
			dark
			style={{
				minHeight: 'fit-content',
				padding: '2rem 0',
			}}>
			<Grid container spacing={2}>
				{services.map((post, i) => (
					<Grid xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<CardServices key={post.title} post={post} />
					</Grid>
				))}
			</Grid>
		</MainDiv>
	);
};

export default Services;
