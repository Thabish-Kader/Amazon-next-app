import React from "react";
import { Products } from "../typings";
import { Product } from "./Product";

type Props = {
	products: Products[];
};

export const Feed = ({ products }: Props) => {
	return (
		<div>
			{products.map((productData) => (
				<Product key={productData.id} products={productData} />
			))}
		</div>
	);
};
