/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MainDiv } from '../Styles/globalComponents';

import CardServices from './CardServices';
import { services } from '../FalseBackEnd/services';

import Container from '@mui/material/Container';

const Services = () => {
	return (
		<MainDiv
			dark
			style={{
				minHeight: 'fit-content',
				padding: '2rem 0',
			}}>
			<Container
				maxWidth='lg'
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}>
				{services.map((post, i) => (
					<CardServices key={post.title} post={post} />
				))}
			</Container>
		</MainDiv>
	);
};

export default Services;
