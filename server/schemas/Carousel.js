export default {
	name: 'carousel',
	title: 'Carrusel',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Titulo',
			type: 'string',
		},

		{
			name: 'description',
			title: 'Descripción',
			type: 'text',
		},
		{
			name: 'linkText',
			title: 'Link',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Imagen',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'imageURL',
			title: 'Imagen por URL',
			type: 'string',
		},
		{
			name: 'video',
			title: 'Video',
			type: 'string',
		},
	],
};
