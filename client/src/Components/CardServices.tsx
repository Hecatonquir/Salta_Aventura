/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Paper } from '@mui/material';
import { css } from '@emotion/react';

export default function CardServices({ post }: { post: any }) {
	return (
		<Card
			sx={{
				position: 'relative',
				width: 'fit-content',
				overflow: 'visible',
				marginTop: '4rem',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Paper
					sx={{
						position: 'absolute',
						top: -60,
						backgroundColor: 'var(--color-white2)',
						borderRadius: '50%',
						'&:hover': {
							outline: 'var(--color-gray) solid 3px',
						},
						width: 'fit-content',
						padding: '20px',
					}}>
					<CardMedia
						component='img'
						height='50'
						image={post.image}
						alt={post.title}
						sx={{ objectFit: 'fill' }}
					/>
				</Paper>
				<Typography sx={{ marginTop: '1rem' }} variant='h5' component='div'>
					{post.title}
				</Typography>

				<Typography variant='body2'>{post.description}</Typography>
			</CardContent>
		</Card>
	);
}
