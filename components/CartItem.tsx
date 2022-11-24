import Image from "next/image";
import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { Products } from "../typings";
import primeLogo from "../public/assets/primeLogo.png";

type Props = {};

export const CartItem: FC<Products> = ({
	id,
	title,
	price,
	description,
	category,
	image,
	rating,
}) => {
	const rateing = new Array(Math.floor(rating.rate));
	return (
		<div className="grid grid-cols-5 bg-white my-3 p-3">
			<Image
				src={image}
				alt={title}
				height={200}
				width={200}
				className=" object-cover"
			/>
			{/* info */}
			<div className="col-span-3 space-y-2 mx-5 ">
				<h1 className="text-lg font-bold">{title}</h1>
				<p className="text-sm ">{description}</p>
				<p>${price}</p>
				<div className="flex">
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
			<div className="my-auto flex flex-col justify-center">
				<button className="button">Proceed</button>
				<button className="button">Remove From Cart</button>
			</div>
		</div>
	);
};
