import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { cardInfo } from '../interfaces';

export default function DetailMain({ destination }: any) {
	const {} = destination;

	return (
		<Grid
			item
			xs={12}
			md={12}
			sx={{ display: 'grid', placeItems: 'center !important', padding: '1rem' }}>
			<Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.200', marginTop: '1rem', width: 'fit-content' }}>
				<Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
					Descripción del Viaje:
				</Typography>

				<Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
					INCLUYE:
				</Typography>
				<Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
					NO INCLUYE:
				</Typography>
				<Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
					TIPS:
				</Typography>
			</Paper>
			<Paper
				elevation={1}
				sx={{
					p: 2,
					bgcolor: 'grey.200',
					marginTop: '1rem',
					width: '94%',
					display: 'flex',
					justifyContent: 'space-around',
				}}>
				<Box>
					<Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
						ITINERARIO:
					</Typography>
				</Box>
				<Box>
					<Typography variant='h6' gutterBottom sx={{ fontWeight: 600 }}>
						GOOGLE MAPS
					</Typography>
				</Box>
			</Paper>
		</Grid>
	);
}
