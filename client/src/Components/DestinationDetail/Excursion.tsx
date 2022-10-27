import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function VerticalLinearStepper({ excursion }: any) {
	const steps = excursion.map((ex: any) => ({
		label: ex,
		description: ex.description,
	}));

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ maxWidth: 400 }}>
			<Stepper activeStep={activeStep} orientation='vertical'>
				{steps.map((step: any, index: number) => (
					<Step key={step.label}>
						<StepLabel
							optional={index === 2 ? <Typography variant='caption'>Last Tour</Typography> : null}
							sx={{
								'& circle': {
									color: 'var(--color-brown3)',
								},
							}}>
							{step.label}
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
