/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function CardDestination({ destination }: { destination: any }) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card
			sx={{
				position: 'relative',
				maxWidth: 345,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'row',
			}}>
			<CardMedia component='img' height='194' image={destination.image} alt={destination.imageLabel} />
			<Chip
				label={`AR$ ${destination.price}`}
				sx={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'var(--color-green1)' }}
			/>
			<CardHeader
				/* avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
						R
					</Avatar>
				} */
				/* 	action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				} */
				title={destination.title}
				/* subheader='' */
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{destination.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography component='legend'> {destination.restrictions}</Typography>
				<Rating name='read-only' value={destination.rating} readOnly />
			</CardActions>
		</Card>
	);
}
