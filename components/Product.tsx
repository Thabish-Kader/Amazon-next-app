import Image from "next/image";
import React from "react";
import { Products } from "../typings";
import { AiFillStar } from "react-icons/ai";
import primeLogo from "../public/assets/primeLogo.png";
type Props = {
	products: Products;
};

export const Product = ({ products }: Props) => {
	const randomRateing = new Array(Math.floor(Math.random() * 5) + 1);
	const random_boolean = Math.random() < 0.5;
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
					{/* causing hydration error due to useing random */}
					{randomRateing.fill("").map((_, id) => (
						<AiFillStar key={id} color="orange" />
					))}
				</div>
				{random_boolean && (
					<Image
						loading="lazy"
						src={primeLogo}
						alt="/prime"
						className="h-16 w-16 object-contain"
					/>
				)}
			</div>

			<button className="mt-auto w-full button">Add to Basket</button>
		</div>
	);
};
