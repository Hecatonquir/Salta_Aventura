import { barbecue, caravan, cabin2, fire } from '../Images';

interface Service {
	title: string;
	date: string;
	description: string;
	image: string;
	imageLabel: string;
}

export const services: Array<Service> = [
	{
		title: 'Asados',
		date: 'Nov 12',
		description: 'Texto explicando ventajas 1',
		image: barbecue,
		imageLabel: 'Image Text',
	},
	{
		title: 'Transporte',
		date: 'Nov 11',
		description: 'Texto explicando ventajas 2',
		image: caravan,
		imageLabel: 'Image Text',
	},
	{
		title: 'Campamentos',
		date: 'Nov 11',
		description: 'Texto explicando ventajas 3',
		image: cabin2,
		imageLabel: 'Image Text',
	},
	{
		title: 'Fogatas',
		date: 'Nov 11',
		description: 'Texto explicando ventajas 4	',
		image: fire,
		imageLabel: 'Image Text',
	},
];
