//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import ReactPlayer from 'react-player';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';

import { urlFor } from '../../../client';
import CarouselText from './CarouselText';

export default function Carousel({ slides }) {
	const vid = slides.filter((s) => s.video);
	slides = slides.filter((s) => !s.video);
	slides = slides.concat(vid);

	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={1}
				centeredSlides={true}
				autoplay={{
					delay: 50000,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'>
				{slides.map((slide, i) => {
					const src = slide.image ? urlFor(slide.image).url() : slide.imageURL;

					return (
						<SwiperSlide key={i}>
							{!slide.video ? (
								<>
									<img src={src} alt={slide.title} />
									<CarouselText post={slide} />
								</>
							) : (
								<ReactPlayer
									url={slide.video}
									width='100%'
									height='100%'
									muted
									playing={true}
									style={{ zIndex: -10 }}
								/>
							)}
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
// eslint-disable-next-line no-lone-blocks
{
	/* <iframe
									width='100%'
									height='100%'
									src=
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen></iframe> */
}
