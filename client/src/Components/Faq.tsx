import React, { useEffect, useState } from 'react';
import { client } from '../client';

import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import goToID from './goToID';

const Faq = () => {
	const [faqe, setFaqe] = useState([]);

	const [faqp, setFaqp] = useState([]);

	useEffect(() => {
		goToID('FAQ');
		const fe = '*[_type == "faqe"]';
		const fp = '*[_type == "faqp"]';

		client.fetch(fe).then((data: any) => setFaqe(data));
		client.fetch(fp).then((data: any) => setFaqp(data));
	}, []);

	const [expanded, setExpanded] = React.useState<string | false>(false);

	const [expanded2, setExpanded2] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleChange2 = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded2(isExpanded ? panel : false);
	};

	return (
		<Box
			id='FAQ'
			sx={{
				display: 'flex',
				bgcolor: '#e7ecef',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '2rem 0',
			}}>
			<Typography
				variant='h1'
				component='h2'
				sx={{
					fontWeight: 500,
					marginTop: '3rem',
					fontSize: { xs: '4rem', md: '6rem' },
					textAlign: 'center',
				}}>
				Pr
				<u
					style={{
						textDecoration: 'underline solid var(--color-green3) 5px',
						textUnderlineOffset: '10px',
					}}>
					eguntas Frecuent
				</u>
				es
			</Typography>

			<Box
				sx={{
					bgcolor: 'var(--color-white3)',
					width: '100%',
					margin: '1rem 0',
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					justifyContent: 'space-evenly',
				}}>
				<Box sx={{ margin: '1rem' }}>
					<Typography sx={{ marginBottom: '1rem', textAlign: 'center' }} variant='h3'>
						Sobre Excusiones
					</Typography>
					{faqe
						? faqe.map((duplet: any) => (
								<Accordion
									key={duplet.question}
									expanded={expanded === duplet.question}
									onChange={handleChange(duplet.question)}>
									<AccordionSummary
										sx={{ bgcolor: 'var(--color-green3)' }}
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1bh-content'
										id='panel1bh-header'>
										<Typography sx={{ width: '100%', flexShrink: 0 }}>{duplet.question}</Typography>
									</AccordionSummary>
									<AccordionDetails sx={{ bgcolor: 'var(--color-white1)' }}>
										<Typography>{duplet.answer}</Typography>
									</AccordionDetails>
								</Accordion>
						  ))
						: null}
				</Box>
				<Box sx={{ margin: '1rem' }}>
					<Typography sx={{ marginBottom: '1rem', textAlign: 'center' }} variant='h3'>
						Formas de Pago
					</Typography>
					{faqp
						? faqp.map((duplet: any, i) => (
								<Accordion
									key={duplet.question}
									expanded={expanded2 === duplet.question}
									onChange={handleChange2(duplet.question)}>
									<AccordionSummary
										sx={{ bgcolor: 'var(--color-green3)' }}
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1bh-content'
										id='panel1bh-header'>
										<Typography sx={{ width: '100%', flexShrink: 0 }}>{duplet.question}</Typography>
									</AccordionSummary>
									<AccordionDetails sx={{ bgcolor: 'var(--color-white1)' }}>
										<Typography>{duplet.answer}</Typography>
									</AccordionDetails>
								</Accordion>
						  ))
						: null}
				</Box>
			</Box>
		</Box>
	);
};

export default Faq;
