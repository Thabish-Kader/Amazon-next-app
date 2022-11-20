import Image from "next/image";
import React from "react";
import amazonLogo from "../public/assets/amazonLogo.png";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBars3 } from "react-icons/hi2";
type Props = {};

export const Header = (props: Props) => {
	return (
		<div>
			{/* top nav */}
			<div className="bg-amazon flex items-center justify-between space-x-3 p-1 text-white px-3">
				<Image
					src={amazonLogo}
					alt="/logo"
					className="h-16 w-24 object-contain"
				/>
				<div className="hidden sm:flex md:flex-grow items-center bg-yellow-400 rounded-md">
					<input
						className="h-9 px-2 text-black rounded-l-md flex-grow outline-none "
						type="text"
					/>
					<GoSearch
						size={35}
						color="black"
						className="p-2 rounded-md hover:bg-yellow-500 cursor-pointer"
					/>
				</div>

				{/* Right side */}
				<div className="flex items-center space-x-3">
					<div className="links">
						<p>Hello Thabish</p>
						<p className="font-bold">Account & List</p>
					</div>
					<div className="links">
						<p>Returns</p>
						<p className="font-bold">& Orders</p>
					</div>
					<div className="flex items-center cursor-pointer hover:underline relative space-x-1">
						<div className="absolute top-[-3px] left-8 h-4 flex items-center justify-center rounded-full text-black w-4 bg-yellow-400">
							<span className="font-bold">0</span>
						</div>
						<AiOutlineShoppingCart size={35} />
						<p className="font-bold sm:inline hidden">Basket</p>
					</div>
				</div>
			</div>
			{/* bottom nav */}
			<div></div>
		</div>
	);
};
