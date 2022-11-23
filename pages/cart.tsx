import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";
import amazonAd from "../public/assets/amazonad.jpeg";
type Props = {};

export default function cart(props: Props) {
	return (
		<div className="bg-gray-200">
			<Header />

			<main className="max-w-screen-2xl mx-auto  flex flex-col">
				<Image
					className="w-full max-h-[300px] object-cover"
					src={amazonAd}
					alt=""
				/>
				<h1 className="text-xl  my-2 border-b border-black">
					Shopping Cart
				</h1>
			</main>
		</div>
	);
}
