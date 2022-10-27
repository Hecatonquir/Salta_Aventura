import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import PaidIcon from '@mui/icons-material/Paid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../client';

interface DestinationProps {
	destination: {
		_id: string;
		name: string;
		date: string;
		duration: string;
		description: string;
		image: string;
		price1: { price: string; untill: string };
		rating: number;
	};
}

export default function CardDestination(props: DestinationProps) {
	const { destination } = props;

	const src = urlFor(destination.image).url();
	return (
		<Grid item xs={12}>
			<Link to={`/Destination/${destination._id}`}>
				<CardActionArea component='div' sx={{}}>
					<Card
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'space-between',
							maxHeight: '50vh',
							mt:2
						}}>
						<CardContent
							sx={{
								width: { xs: '100%', md: '50%' },
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								padding: { xs: '0.5rem 0', md: '1rem' },
							}}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: { xs: 'column', md: 'row' },
									width: '100%',
									justifyContent: 'space-between',
									alignItems: 'center',
									gap: { xs: '0rem', md: '2rem' },
								}}>
								<Typography component='h2' variant='h5' align='center'>
									{destination.name}
								</Typography>
								<Chip
									icon={<PaidIcon />}
									label={`${destination.price1.price}`}
									sx={{
										width: 'fit-content',
										bgcolor: 'var(--color-blue3)',
										display: { xs: 'none', md: 'flex' },
									}}
								/>
							</Box>
							<Typography
								variant='subtitle1'
								color='text.secondary'
								sx={{ display: { xs: 'none', md: 'flex' } }}>
								{destination.date}
							</Typography>
							<Typography
								variant='subtitle1'
								paragraph
								sx={{
									display: { xs: 'none', md: 'flex' },
									p: 1,
								}}>
								{destination.description}
							</Typography>
							<Typography
								variant='subtitle1'
								color='text.secondary'
								sx={{
									display: { xs: 'none', md: 'flex' },
								}}>
								Duración: {destination.duration}
							</Typography>

							<Box
								sx={{
									width: '100%',
									display: { xs: 'none', md: 'flex' },
									justifyContent: 'center',
								}}>
								<Rating
									name='read-only'
									value={destination.rating}
									readOnly
									sx={{ color: 'var(--color-brown3)' }}
								/>
							</Box>
						</CardContent>

						<CardMedia
							component='img'
							sx={{
								display: { xs: 'flex', sm: 'block' },
								width: { xs: '100%', md: '50%' },
								height: 'auto',
								objectFit: 'fill',
							}}
							image={src}
							alt={destination.name}
						/>
					</Card>
				</CardActionArea>
			</Link>
		</Grid>
	);
}
