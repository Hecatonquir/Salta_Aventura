import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
const theme = createTheme();

export const nav = css`
	position: sticky;
	background-color: rgb(0, 0, 0, 0.6);
	backdrop-filter: blur(10px);
	&:hover {
		background-color: rgb(0, 0, 0, 0.8);
	}
	${theme.breakpoints.down('md')} {
		background-color: rgb(100, 100, 100, 0.6);
	}
`;

export const img = css`
	max-width: 50px;
	max-height: 25px;
	margin-right: 1rem;
`;
