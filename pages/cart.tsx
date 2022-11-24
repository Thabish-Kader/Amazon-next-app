import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";
import amazonAd from "../public/assets/amazonad.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CartItem } from "../components/CartItem";

type Props = {};

export default function cart(props: Props) {
	const cartData = useSelector((state: RootState) => state.cart.cart);

	return (
		<div className="bg-gray-200">
			<Header />

			<main className="max-w-screen-2xl mx-auto  flex flex-col">
				<Image
					className="w-full max-h-[300px] object-cover"
					src={amazonAd}
					alt=""
				/>
				<h1 className="text-xl  my-2 border-b border-black font-bold">
					Shopping Cart
				</h1>
				{cartData.map((data) => (
					<CartItem
						key={data.id}
						id={data.id}
						title={data.title}
						price={data.price}
						description={data.description}
						category={data.category}
						image={data.image}
						rating={data.rating}
					/>
				))}
			</main>
		</div>
	);
}
