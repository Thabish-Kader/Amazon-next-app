import Image from "next/image";
import React from "react";
import { Header } from "../components/Header";

type Props = {};

export default function cart(props: Props) {
	return (
		<div>
			<Header />

			<main className="max-w-screen-2xl mx-auto">
				<img
					className="w-full object-cover"
					src="https://connect-assets.prosple.com/cdn/ff/zNryDlf-uf0qIh0kt7iOyMHP2B0NW30YDNDCOXMU-NM/1578558097/public/2020-01/Banner-Amazon-893x321-2020.jpg"
					alt=""
				/>
			</main>
		</div>
	);
}
