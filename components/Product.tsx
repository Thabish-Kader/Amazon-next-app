import Image from "next/image";
import React from "react";
import { Products } from "../typings";

type Props = {
	products: Products;
};

export const Product = ({ products }: Props) => {
	return (
		<div className="flex flex-col m-3 p-10">
			<p>{products.category}</p>
			<Image
				src={products.image as string}
				alt="/"
				height={200}
				width={200}
			/>
			<h1>{products.title}</h1>
			<p>{products.description}</p>
			<p>{products.price}</p>
			<div></div>
		</div>
	);
};
