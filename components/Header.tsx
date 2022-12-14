import Image from "next/image";
import React from "react";
import amazonLogo from "../public/assets/amazonLogo.png";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Products } from "../typings";
import { RootState } from "../store";

export const Header = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const cartData = useSelector((state: RootState) => state.cart.cart);

	return (
		<div>
			{/* top nav */}
			<div className="bg-amazon flex items-center justify-between space-x-3 p-1 text-white px-3">
				<Image
					onClick={() => router.push("/")}
					src={amazonLogo}
					alt="/logo"
					className="w-[120px] cursor-pointer"
				/>

				{/* Search */}
				<div className="hidden shrink sm:flex sm:flex-grow items-center bg-yellow-400 rounded-md">
					<input
						className="h-9 px-2  text-black rounded-l-md w-2 flex-grow flex-shrink outline-none "
						type="text"
					/>
					<GoSearch
						size={35}
						color="black"
						className="p-2 rounded-md hover:bg-yellow-500 cursor-pointer"
					/>
				</div>

				{/* Links and Cart*/}
				<div className="flex items-center space-x-3">
					<div
						onClick={session ? () => signOut() : () => signIn()}
						className="links"
					>
						<div>
							{session ? (
								<>
									<p>Hello {session.user?.name}</p>
									<p className="font-bold">Sign Out</p>
								</>
							) : (
								<>
									<p>Sign In</p>
									<p className="font-bold">Account & List</p>
								</>
							)}
						</div>
					</div>
					<div className="links">
						<p>Returns</p>
						<p className="font-bold">& Orders</p>
					</div>
					<div
						onClick={() => router.push("/cart")}
						className="flex items-center cursor-pointer hover:underline relative space-x-1"
					>
						<div className="absolute top-[-3px] left-8 h-4 flex items-center justify-center rounded-full text-black w-4 bg-yellow-400">
							<span className="font-bold">
								{cartData?.length}
							</span>
						</div>
						<AiOutlineShoppingCart size={35} />
						<p className="font-bold md:inline hidden">Basket</p>
					</div>
				</div>
			</div>
			{/* bottom nav */}
			<div className="bg-amazon-light_blue text-white flex items-center space-x-3">
				<AiOutlineBars size={25} className="ml-1" />
				<p className="links">All</p>
				<p className="links">Prime Video</p>
				<p className="links">Clothing</p>
				<p className="links">Sports</p>
				<p className="links hidden lg:inline">Electronics</p>
				<p className="links hidden lg:inline">Food & Grocery</p>
				<p className="links hidden lg:inline">Prime</p>
				<p className="links hidden lg:inline">Best Buys</p>
				<p className="links hidden lg:inline">Health & Personal Care</p>
				<p className="links hidden lg:inline">Tools</p>
			</div>
		</div>
	);
};
