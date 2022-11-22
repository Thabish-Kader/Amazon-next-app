import React from "react";
import { Products } from "../typings";
import { Product } from "./Product";
import Ad from "../public/assets/advertisement.jpg";
import Image from "next/image";
type Props = {
	products: Products[];
};

export const Feed = ({ products }: Props) => {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-30 md:-mt-32">
			{products.slice(0, 4).map((productData) => (
				<Product key={productData.id} products={productData} />
			))}
			<div className="mx-auto md:col-span-2 lg:col-span-3 xl:col-span-4">
				<Image src={Ad} alt="ad" />
			</div>
			{products.slice(4, products.length).map((productData) => (
				<Product key={productData.id} products={productData} />
			))}
		</div>
	);
};
