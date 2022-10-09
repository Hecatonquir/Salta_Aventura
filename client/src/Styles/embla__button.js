import { css } from '@emotion/react';

export const embla__button__prev = css`
	outline: 0;
	cursor: pointer;
	background-color: var(--color-pink1);
	touch-action: manipulation;
	position: absolute;
	z-index: 1;
	top: 50%;
	transform: translateY(-50%);
	border: 0;
	width: 35px;
	height: 35px;
	justify-content: center;
	align-items: center;
	fill: #1bcacd;
	padding: 0;
	left: 27px;
	&:hover {
		background-color: var(--color-green1);
	}
`;
export const embla__button__next = css`
	outline: 0;
	cursor: pointer;
	background-color: var(--color-pink1);
	touch-action: manipulation;
	position: absolute;
	z-index: 1;
	top: 50%;
	transform: translateY(-50%);
	border: 0;
	width: 35px;
	height: 35px;
	justify-content: center;
	align-items: center;
	fill: red;
	padding: 0;
	right: 27px;
	&:hover {
		background-color: var(--color-green1);
	}
`;
