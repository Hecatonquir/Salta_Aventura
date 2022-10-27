import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Box } from '@mui/material';

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
				bgcolor: 'white',
			}}>
			<CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Box
					sx={{
						position: 'absolute',
						top: -60,
						backgroundColor: 'var(--color-pink2)',
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
				</Box>
				<Typography
					sx={{ marginTop: '1rem', fontSize: { xs: '20px', md: 'auto' } }}
					variant='h5'
					component='div'>
					{post.title}
				</Typography>

				<Typography variant='body2' align='center'>
					{post.description}
				</Typography>
			</CardContent>
		</Card>
	);
}
