import React from "react";
import { Products } from "../typings";
import { Product } from "./Product";

type Props = {
	products: Products[];
};

export const Feed = ({ products }: Props) => {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((productData) => (
				<Product key={productData.id} products={productData} />
			))}
		</div>
	);
};
