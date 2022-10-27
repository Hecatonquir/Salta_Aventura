import { Link, Typography } from '@mui/material';

import { MainDiv } from '../Styles/globalComponents';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Copyright(props: any) {
	return (
		<Typography variant='body2' color='text.secondary' align='center' {...props}>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
	},
	{
		title: 'Resources',
		description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
	},
];

const Footer = () => {
	return (
		<MainDiv
			id='Contacto'
			style={{
				backgroundColor: 'var(--color-gray)',
				minHeight: '10rem',
				display: 'flex',
				justifyContent: 'space-between',
				overflow: 'hidden',
				color: 'white',
			}}>
			{/* Footer */}
			<Container
				maxWidth='md'
				component='footer'
				sx={{
					py: [3, 6],
				}}>
				<Grid container spacing={4} justifyContent='space-evenly'>
					{footers.map((footer) => (
						<Grid item xs={6} sm={3} key={footer.title}>
							<Typography variant='h6' color='text.primary' gutterBottom>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map((item) => (
									<li key={item}>
										<Link href='#' variant='subtitle1' color='text.secondary'>
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid>
				<Copyright sx={{ mt: 5 }} />
			</Container>
			{/* End footer */}
		</MainDiv>
	);
};

export default Footer;
