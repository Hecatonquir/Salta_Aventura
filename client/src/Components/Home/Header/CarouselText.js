import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { CarouselTextCss } from './CarouselTextCss';
/** @jsxImportSource @emotion/react */
//ESTO ES PARA QUE EMOTION FUNCIONE CON CREATE-REACT-APP

function CarouselText({ post }) {
	return (
		<Paper
			css={CarouselTextCss}
			sx={{
				position: 'absolute',
				bottom: '-50px',
				backgroundColor: 'rgba(0,0,0,.3)',
				color: '#fff',
				paddingBottom: { xs: '4rem', md: '2rem' },
				paddingTop: '0rem !important',
				width: '100%',
				height: '30%',
			}}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					right: 0,
					left: 0,
					backgroundColor: 'rgba(0,0,0,.3)',
				}}
			/>

			<Box
				sx={{
					flexDirection: 'column',
					alignItems: 'flex-start',
					position: 'relative',
					p: 2,
					color: 'var(--color-blue1)',
				}}>
				<Typography
					component='h1'
					variant='h3'
					gutterBottom
					sx={{ marginTop: { xs: '1rem', md: '0rem' }, fontSize: '30px' }}>
					{post.title}
				</Typography>
				<Typography
					variant='h5'
					paragraph
					align='left'
					sx={{ display: { xs: 'none !important', md: 'flex !important' } }}>
					{post.description}
				</Typography>
			</Box>
		</Paper>
	);
}

export default CarouselText;
