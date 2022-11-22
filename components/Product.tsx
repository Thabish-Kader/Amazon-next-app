import Image from "next/image";
import React from "react";
import { Products } from "../typings";
import { AiFillStar } from "react-icons/ai";

type Props = {
	products: Products;
};

export const Product = ({ products }: Props) => {
	const randomRateing = new Array(Math.floor(Math.random() * 5) + 1);
	const random_boolean = Math.random() < 0.5;
	return (
		<div className="flex flex-col m-3 p-10">
			<p className="flex justify-end italic text-gray-400">
				{products.category}
			</p>
			<div className="flex  justify-center">
				<Image
					src={products.image as string}
					alt="/"
					height={200}
					width={200}
				/>
			</div>
			<h1 className="text-lg">{products.title}</h1>
			<p className="text-sm">{products.description}</p>
			<p>${products.price}</p>
			<div className="flex ">
				{randomRateing.fill("").map((_, id) => (
					<AiFillStar key={id} />
				))}
			</div>
			<button>Add to Basket</button>
		</div>
	);
};
