import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";
import amazonAd from "../public/assets/amazonad.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CartItem } from "../components/CartItem";
import { Products } from "../typings";
import { SessionProvider, useSession } from "next-auth/react";

type Props = {};

export default function cart(props: Props) {
	const { data: session } = useSession();

	const cartData: Products[] = useSelector(
		(state: RootState) => state.cart.cart
	);
	let totalPrice = cartData.reduce((accumulator, item) => {
		return accumulator + item.price;
	}, 0);
	return (
		<div className="bg-gray-200">
			<Header />

			<main className="max-w-screen-2xl mx-auto  grid gap-4 lg:grid-cols-5">
				<div className="lg:col-span-4">
					{/* banner */}
					<Image
						className="w-full max-h-[300px] object-cover"
						src={amazonAd}
						alt=""
					/>
					{cartData.length > 0 ? (
						<h1 className="text-xl  my-2 border-b border-black font-bold">
							Shopping Cart
						</h1>
					) : (
						<h1 className="text-xl  my-2 border-b border-black font-bold">
							Cart is Empty
						</h1>
					)}

					{/* Items */}
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
				</div>
				{/* right side */}
				{cartData.length > 0 && (
					<div className="lg:cols-span-1 bg-white p-4 flex flex-col m-3 lg:m-0">
						<h1 className="text-lg whitespace-nowrap">
							Total (Items : {cartData.length}) :
							<span className="font-bold">${totalPrice}</span>
						</h1>
						<button
							disabled={!session}
							className={`button mt-2 ${
								!session &&
								"from-gray-300 to-gray-500 border-gray-500 text-gray-300 cursor-not-allowed"
							}`}
						>
							{session
								? "Proceed to Checkout"
								: "Sign in to Continue"}
						</button>
					</div>
				)}
			</main>
		</div>
	);
}
