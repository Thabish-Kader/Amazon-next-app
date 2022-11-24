import Image from "next/image";
import React, { useEffect } from "react";
import { Products } from "../typings";
import { AiFillStar } from "react-icons/ai";
import primeLogo from "../public/assets/primeLogo.png";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/cart";

type Props = {
	products: Products;
};

export const Product = ({ products }: Props) => {
	const rateing = new Array(Math.floor(products.rating.rate));
	const dispatch = useDispatch();

	const addToCart = () => {
		const product = {
			id: products.id,
			title: products.title,
			price: products.price,
			description: products.description,
			category: products.category,
			image: products.image,
			rating: products.rating,
		};
		dispatch(addToBasket(product));
	};

	return (
		<div className="flex z-10 flex-col m-3 p-10 bg-white ">
			<p className="flex justify-end italic text-gray-400">
				{products.category}
			</p>
			<div className="flex  justify-center">
				<div className=" relative h-[200px] w-[200px]">
					<Image
						src={products.image as string}
						alt="/"
						// height={200}
						// width={200}
						className="object-contain"
						fill
					/>
				</div>
			</div>
			<h1 className="text-md mt-2">{products.title}</h1>

			{/* description price rating and prime logo */}
			<div className="flex flex-col justify-center space-y-2">
				<p className="text-sm line-clamp-2">{products.description}</p>
				<p>${products.price}</p>

				<div className="flex ">
					{rateing.fill("").map((_, id) => (
						<AiFillStar key={id} color="orange" />
					))}
				</div>
				{rateing.length > 3 && (
					<Image
						loading="lazy"
						src={primeLogo}
						alt="/prime"
						className="h-16 w-16 object-contain"
					/>
				)}
			</div>

			<button onClick={addToCart} className="mt-auto w-full button">
				Add to Basket
			</button>
		</div>
	);
};
