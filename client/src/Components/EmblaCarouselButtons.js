import React from 'react';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Styles/embla.css';
/** @jsxImportSource @emotion/react */
import { embla__button__prev, embla__button__next } from '../Styles/embla__button.js';

export const PrevButton = ({ enabled, onClick }) => (
	<Fab
		css={embla__button__prev}
		className='embla__button embla__button--prev'
		onClick={onClick}
		disabled={!enabled}>
		<ArrowBackIosIcon />
	</Fab>
);

export const NextButton = ({ enabled, onClick }) => (
	<Fab
		css={embla__button__next}
		className='embla__button embla__button--next'
		onClick={onClick}
		disabled={!enabled}>
		<ArrowForwardIosIcon />
	</Fab>
);
