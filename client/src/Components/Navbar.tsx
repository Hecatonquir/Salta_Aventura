/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Logo } from '../Images';
import { nav, img } from '../Styles/01-Navbar.js';
import { Link } from 'react-router-dom';
import goToID from './goToID';

/** @jsxImportSource @emotion/react */
//ESTO ES PARA QUE EMOTION FUNCIONE CON CREATE-REACT-APP

const pages = ['Home', 'Servicios', 'Destinos'];

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const pathname = window.location.href;
	const section = pathname.substring(pathname.indexOf('#') + 1);

	useEffect(() => {
		goToID(section);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<AppBar id='Home' css={nav}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Box
							component='img'
							src={Logo}
							alt='Logo'
							css={img}
							sx={{ display: { xs: 'none', md: 'flex' } }}
						/>
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'black',
								textDecoration: 'none',
							}}>
							Salta es Aventura
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={(e) => handleOpenNavMenu(e)}
								color='inherit'>
								<MenuIcon sx={{ color: 'black' }} />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
									color: 'black',
								}}>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Link to={`/#${page}`}>
											<Button
												key={page}
												onClick={(e) => {
													goToID(page);
													handleCloseNavMenu();
												}}
												sx={{ color: 'black', my: 2, display: 'block' }}>
												{page}
											</Button>
										</Link>
									</MenuItem>
								))}

								<MenuItem key={'FAQ1'} onClick={handleCloseNavMenu}>
									<a href='#Contacto'>
										<Button
											key='Contacto'
											onClick={handleCloseNavMenu}
											sx={{ my: 2, color: 'black', display: 'block' }}>
											Contacto
										</Button>
									</a>
								</MenuItem>
								<MenuItem key={'FAQ'} onClick={handleCloseNavMenu}>
									<Link to='/FAQ'>
										<Button
											key='FAQ'
											onClick={handleCloseNavMenu}
											sx={{ my: 2, color: 'black', display: 'block' }}>
											FAQ
										</Button>
									</Link>
								</MenuItem>
							</Menu>
						</Box>
						<Box
							component='img'
							src={Logo}
							alt='Logo'
							css={img}
							sx={{ display: { xs: 'flex', md: 'none' } }}
						/>

						<Typography
							variant='h5'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'black',
								textDecoration: 'none',
							}}>
							S.A.
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
							{pages.map((page) => (
								<Link to={`/#${page}`} key={page}>
									<Button
										sx={{ my: 2, color: 'black', display: 'block' }}
										onClick={() => {
											goToID(page);
										}}>
										{page}
									</Button>
								</Link>
							))}
							<a href='#Contacto'>
								<Button
									key='Contacto'
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'black', display: 'block' }}>
									Contacto
								</Button>
							</a>
							<Link to='/FAQ'>
								<Button
									key='FAQ'
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'black', display: 'block' }}>
									FAQ
								</Button>
							</Link>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			<Stack
				direction={{ xs: 'row', md: 'column' }}
				spacing={2}
				sx={{ position: 'fixed', top: { xs: '93vh', md: '75vh' }, left: '1rem', zIndex: 2 }}>
				<Tooltip title='WhatsApp'>
					<a rel='external' href='https://wa.me/+5493875371188' target='_blank'>
						<IconButton
							sx={{
								bgcolor: 'var(--color-green2)',
								'&:hover': { backgroundColor: 'var(--color-green3)' },
							}}>
							<WhatsAppIcon />
						</IconButton>
					</a>
				</Tooltip>

				<Tooltip title='Facebook'>
					<a
						rel='external'
						target='_blank'
						href='https://m.facebook.com/profile.php?id=100045017725953&_rdr'>
						<IconButton
							sx={{
								bgcolor: 'var(--color-blue2)',
								'&:hover': { backgroundColor: 'var(--color-blue3)' },
							}}>
							<FacebookIcon />
						</IconButton>
					</a>
				</Tooltip>
				<Tooltip title='Instagram'>
					<a rel='external' href='https://www.instagram.com/saltaesaventura01/' target='_blank'>
						<IconButton
							sx={{
								bgcolor: 'var(--color-pink2)',
								'&:hover': { backgroundColor: 'var(--color-pink3)' },
							}}>
							<InstagramIcon />
						</IconButton>
					</a>
				</Tooltip>
			</Stack>
		</>
	);
};
export default Navbar;
