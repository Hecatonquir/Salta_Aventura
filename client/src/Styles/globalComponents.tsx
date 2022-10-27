// ESTPOS OBJECOS PARA CSS DE EMOTION, NECESITAN TENER ESA LÍNEA DE CÖGIDO PARA FUNCIONAR
// 											/** @jsxImportSource @emotion/react */
// MIENTRAS QUE STYLED COMPONENTS NO NECESITAN ESE "HACK"
import styled from '@emotion/styled';

type MainDivProps = {
	dark?: boolean;
};

export const MainDiv = styled.div<MainDivProps>`
	background-color: ${(props) => (props.dark ? 'var(--color-blue1)' : 'var(--color-white3)')};
	height: fit-content;
	min-width: 95vw;
	@media (min-width: 800px) {
		min-height: 100vh;
	}
	overflow: hidden;
`;

type ButtonProps = {
	dark: boolean;
};

export const Button = styled.button<ButtonProps>`
	padding: 32px;
	background-color: ${(props) => (props.dark ? 'grey' : 'brown')};
	font-size: 24px;
	border-radius: 4px;
	color: black;
	font-weight: bold;
	&:hover {
		color: white;
	}
`;
