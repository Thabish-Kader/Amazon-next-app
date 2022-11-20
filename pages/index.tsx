import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Amazon</title>
			</Head>
			{/* Header */}
			<Header />
		</div>
	);
}
