import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { urlFor } from '../../client';

export default function MasonryImageList({ slides }: any) {
	const itemData = slides.map((s: any) => ({
		img: urlFor(s).url(),
		title: 'Salta',
	}));

	return (
		<Box sx={{ position: 'relative', width: '100%', height: 'fit-content' }}>
			<ImageList sx={{ width: '100%', height: '100%' }} variant='woven' cols={3} gap={8}>
				{itemData.map((item: any) => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=161&fit=crop&auto=format`}
							srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}
