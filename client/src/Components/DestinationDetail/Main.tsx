import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Itinerario from './Itinerario';
import Box from '@mui/material/Box';
import VerticalLinearStepper from './Excursion';
/* interface MainProps {
	posts: ReadonlyArray<string>;
	title: string;
} */

export default function Main({ destination }: any) {
	console.log('💥🟢 ~ file: Main.tsx ~ line 14 ~ destination', destination);

	const {
		duration,
		excursion,
		food,
		hotel,
		included,
		notincluded,
		itinerary,
		map,
		date,
		transport,
		price1,
	} = destination;

	const posts = [
		{ title: 'SALIDAS', data: date },
		{ title: 'DURACION', data: duration },
		{ title: 'TRANSPORTE', data: transport },
		{ title: 'HOTEL', data: hotel },
		{ title: 'REGIMEN DE COMIDA', data: food },
	];

	return (
		<>
			<Paper sx={{ bgcolor: 'grey.200' }}>
				<Grid item xs={12} md={8} sx={{ my: 3, p: 1 }}>
					<Typography variant='h6' gutterBottom>
						Detalles
					</Typography>
					<Divider sx={{ mb: 1 }} />
					{posts.map((post, i) => (
						<Typography variant='h6' gutterBottom key={i}>
							{post.title}:
							<Typography variant='body1' gutterBottom sx={{ display: 'inline', ml: 1 }}>
								{post.data}:
							</Typography>
						</Typography>
					))}
					<Typography variant='h6' gutterBottom>
						PROMO:
						<Typography variant='body1' gutterBottom sx={{ display: 'inline', ml: 1 }}>
							Válida Hasta el: {price1.untill}
						</Typography>
					</Typography>

					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Typography variant='h6' gutterBottom>
								EXCURSIONES:
								<VerticalLinearStepper excursion={excursion} />
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant='h6' gutterBottom>
								INCLUYE:
								<Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
									{included.map((inc: any) => (
										<>
											<Badge
												badgeContent={'✓'}
												color='success'
												anchorOrigin={{
													vertical: 'top',
													horizontal: 'left',
												}}
												sx={{ position: 'relative', top: '10px' }}
											/>
											<Typography variant='body1' gutterBottom sx={{ display: 'inline', ml: 3 }}>
												{inc}
											</Typography>
										</>
									))}
								</Box>
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant='h6' gutterBottom>
								NO INCLUYEN:
								<Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
									{notincluded.map((ninc: any) => (
										<>
											<Badge
												badgeContent={'×'}
												color='error'
												anchorOrigin={{
													vertical: 'top',
													horizontal: 'left',
												}}
												sx={{ position: 'relative', top: '10px', ml: 0 }}
											/>
											<Typography variant='body1' gutterBottom sx={{ display: 'inline', ml: 3 }}>
												{ninc}
											</Typography>
										</>
									))}
								</Box>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					justifyContent: 'space-between',
				}}>
				<Grid item xs={12} md={5} sx={{ pb: 2, width: { xs: '100%', md: '49.5%' } }}>
					<Paper>
						<Typography variant='h4' gutterBottom align='center'>
							Itinerario
						</Typography>
						<Itinerario itin={itinerary} />
					</Paper>
				</Grid>
				<Grid item xs={12} md={5} sx={{ pb: 2, width: { xs: '100%', md: '49.5%' } }}>
					<Paper>
						<Typography variant='h4' gutterBottom align='center'>
							Comentarios
						</Typography>
						Comentarios
					</Paper>
				</Grid>
			</Box>
		</>
	);
}
