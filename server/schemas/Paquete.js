export default {
	name: 'paquete',
	title: 'Paquete',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Nombre',
			type: 'string',
		},
		{
			name: 'date',
			title: 'Salidas',
			type: 'string',
		},
		{
			name: 'fechas',
			title: 'Meses de Actividad',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'duration',
			title: 'Duración de la excursión',
			type: 'string',
		},
		{
			name: 'hours',
			title: 'Duración del viaje (hs)',
			type: 'number',
		},
		{
			name: 'description',
			title: 'Descripción',
			type: 'text',
		},
		{
			name: 'transport',
			title: 'Transporte',
			type: 'text',
		},
		{
			name: 'hotel',
			title: 'Hotel',
			type: 'text',
		},
		{
			name: 'food',
			title: 'Regimen de Comida',
			type: 'text',
		},
		{
			name: 'excursion',
			title: 'Excursiones',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'included',
			title: 'Incluye',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'notincluded',
			title: 'No Incluye',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'price1',
			title: 'Precio Promocional',
			type: 'object',
			fields: [
				{
					name: 'price',
					title: 'Precio',
					type: 'string',
				},
				{
					title: 'Hasta',
					name: 'untill',
					type: 'string',
				},
			],
		},
		{
			name: 'rating',
			title: 'Rating (0-5)',
			type: 'number',
		},

		{
			name: 'restriction',
			title: 'Edad mínima',
			type: 'number',
		},
		{
			name: 'distance',
			title: 'Distancia Recorrida',
			type: 'number',
		},
		{
			name: 'height',
			title: 'Altura Máxima',
			type: 'number',
		},
		{
			name: 'lenguages',
			title: 'Idiomas disponibles',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'starts',
			title: 'Donde Inicia La excursión',
			type: 'string',
		},
		{
			name: 'ends',
			title: 'Donde Termina La excursión',
			type: 'string',
		},

		{
			name: 'tips',
			title: 'Consejos',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'itinerary',
			title: 'Itinerario',
			type: 'array',
			of: [{ type: 'itinerary' }],
		},
		{
			name: 'map',
			title: 'Mapa',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Imagen de la Tarjeta',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'images',
			title: 'Imagenes',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotspot: true,
			},
		},
	],
};
