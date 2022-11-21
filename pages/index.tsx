import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Amazon</title>
			</Head>
			{/* Header */}
			<Header />

			<main>
				{/* banner */}
				<Banner />
				{/* Feed */}
			</main>
		</div>
	);
}
