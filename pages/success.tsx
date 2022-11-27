import React from "react";
import { Header } from "../components/Header";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
type Props = {};

const Success = (props: Props) => {
	const { data: session, status } = useSession();

	return (
		<div className="bg-gray-100 h-screen">
			<Header />

			<main className="max-w-screen-lg mx-auto mt-10">
				<div className="flex flex-col p-10 bg-white">
					<div className="flex items-center space-x-2 mb-5">
						<AiFillCheckCircle
							size={30}
							className="text-green-500 h-10"
						/>
						<h1 className="text-3xl">
							Thank you, your order has been placed
						</h1>
					</div>
					<p>Your order will arrive to you soon</p>
				</div>
			</main>
		</div>
	);
};

export default Success;
