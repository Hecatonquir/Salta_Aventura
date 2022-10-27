import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import RouteIcon from '@mui/icons-material/Route';
import LandscapeIcon from '@mui/icons-material/Landscape';
import TranslateIcon from '@mui/icons-material/Translate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarsIcon from '@mui/icons-material/Stars';
import StartIcon from '@mui/icons-material/Start';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
/* interface SidebarProps {
	archives: string[];
	description: string;
	social: ReadonlyArray<{
		icon: React.ElementType;
		name: string;
	}>;
} */
const social = [
	{ name: 'WhatsApp', icon: WhatsAppIcon, url: 'https://wa.me/+5493875371188' },
	{
		name: 'Facebook',
		icon: FacebookIcon,
		url: 'https://m.facebook.com/profile.php?id=100045017725953&_rdr',
	},
	{ name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/saltaesaventura01/' },
];
export default function Sidebar({ destination }: any) {
	const {
		fechas,
		description,
		distance,
		ends,
		height,
		lenguages,
		price1,
		rating,
		restriction,
		starts,
		hours,
	} = destination;

	return (
		<Grid container>
			<Paper
				elevation={1}
				sx={{ p: 2, bgcolor: 'grey.200', height: '25vh', position: 'relative', overflow: 'hidden' }}>
				<Typography variant='h6' gutterBottom>
					Descripción
				</Typography>
				<Typography
					sx={{
						WebkitLineClamp: 6,
						overflowY: 'scroll',
					}}>
					{description}
				</Typography>
			</Paper>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
				<Box>
					<Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
						Durante
					</Typography>
					{fechas.map((month: string) => (
						<Typography display='block' key={month} variant='body1'>
							{month}
						</Typography>
					))}
				</Box>
				<Box>
					<Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
						Social
					</Typography>
					{social.map((network) => (
						<Link
							rel='external'
							target='_blank'
							display='block'
							variant='body1'
							href={network.url}
							key={network.name}
							sx={{ mb: 0.5 }}>
							<Stack direction='row' spacing={1} alignItems='center'>
								<network.icon />
								<span>{network.name}</span>
							</Stack>
						</Link>
					))}
				</Box>
			</Box>
			<Paper elevation={1} sx={{ mt: 2, width: '100%', p: 2, bgcolor: 'grey.200' }}>
				<Typography variant='h6' gutterBottom>
					<AttachMoneyIcon sx={{ position: 'relative', top: '5px' }} />
					Precio:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1 }}>
						{price1.price}
					</Typography>
				</Typography>
				<Typography variant='h6' gutterBottom>
					<StarsIcon sx={{ position: 'relative', top: '5px' }} /> Rating:
					<Rating
						name='read-only'
						value={rating}
						readOnly
						sx={{ position: 'relative', top: 5, ml: 1, color: 'var(--color-brown3)' }}
					/>
				</Typography>
				<Typography variant='h6' gutterBottom>
					<AvTimerIcon sx={{ position: 'relative', top: '5px' }} /> Dur. Viaje:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1 }}>
						{hours} Hs.
					</Typography>
				</Typography>
				<Typography variant='h6' gutterBottom>
					<RouteIcon sx={{ position: 'relative', top: '5px' }} /> Dist. Viaje:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1, mr: 1 }}>
						{distance} KM
					</Typography>
				</Typography>
				<Typography variant='h6' gutterBottom>
					<LandscapeIcon sx={{ position: 'relative', top: '5px' }} /> Alt. Máx:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1, mr: 1 }}>
						{height} KM
					</Typography>
				</Typography>
				<Typography variant='h6' gutterBottom>
					<TranslateIcon sx={{ position: 'relative', top: '5px' }} /> Idiomas:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1 }}>
						{lenguages.join(', ')}
					</Typography>
				</Typography>{' '}
				<Typography variant='h6' gutterBottom>
					<PersonAddAltIcon sx={{ position: 'relative', top: '5px' }} /> Edad mín.:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1 }}>
						{restriction}
					</Typography>
				</Typography>
				<Typography variant='h6' gutterBottom>
					<StartIcon sx={{ position: 'relative', top: '5px' }} /> Empieza:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1 }}>
						{starts}
					</Typography>
				</Typography>
				<Typography variant='h6' gutterBottom>
					<AssistantPhotoIcon sx={{ position: 'relative', top: '5px' }} /> Termina:
					<Typography variant='body1' gutterBottom sx={{ display: 'inline !important', ml: 1 }}>
						{ends}
					</Typography>
				</Typography>
			</Paper>
		</Grid>
	);
}
