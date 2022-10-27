export interface cardProps {
	destinations: Array<{
		_id: string;
		name: string;
		date: string;
		duration: string;
		description: string;
		image: string;
		price1: { price: string; untill: string };
		rating: number;
	}>;
}
export interface cardInfo {
	destination: {
		_id: string;
		name: string;
		date: { title: string; url: string }[];
		duration: string;
		description: string;
		image: string;
		price: string;
		rating: number;
	};
}
/* _id: string;
name: string;
date: string;
duration: string;
description: string;
image: string;
price1: {
	price: string;
	untill: string;
}
rating: number; */
