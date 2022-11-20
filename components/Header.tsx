import Image from "next/image";
import React from "react";
import amazonLogo from "../public/assets/amazonLogo.png";
import { GoSearch } from "react-icons/go";
type Props = {};

export const Header = (props: Props) => {
	return (
		<div>
			{/* top nav */}
			<div className="bg-amazon flex items-center space-x-3 p-1">
				<Image
					src={amazonLogo}
					alt="/logo"
					className="h-14 w-24 object-contain"
				/>
				<div className="flex flex-grow items-center bg-yellow-400 rounded-md">
					<input className="h-9 rounded-l-md flex-grow" type="text" />
					<GoSearch size={35} className="p-2" />
				</div>
			</div>
			{/* bottom nav */}
			<div></div>
		</div>
	);
};
