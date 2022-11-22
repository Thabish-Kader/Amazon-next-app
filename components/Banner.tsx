import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../public/assets/amazonBanner1.jpg";
import banner2 from "../public/assets/amazonBanner2.jpg";
import banner3 from "../public/assets/amazonBanner3.jpg";
import Image from "next/image";
type Props = {};

export const Banner = (props: Props) => {
	return (
		<section className="relative z-0 ">
			<Carousel
				autoPlay
				interval={5000}
				transitionTime={1000}
				showThumbs={false}
				showIndicators={false}
				infiniteLoop={true}
			>
				<Image loading="lazy" src={banner1} alt="/banner" />

				<Image loading="lazy" src={banner2} alt="/banner" />

				<Image loading="lazy" src={banner3} alt="/banner" />
			</Carousel>
			{/* the following div is for the bottom grey in the banner */}
			<div className="absolute inset-0 z-10 bg-gradient-to-t to-transparent from-gray-400"></div>
		</section>
	);
};
