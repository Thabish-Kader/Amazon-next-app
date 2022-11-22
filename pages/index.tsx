import { GetServerSideProps } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Feed } from "../components/Feed";
import { Header } from "../components/Header";
import { Products } from "../typings";

type ProductProps = {
	productData: Products[];
};

export default function Home({ productData }: ProductProps) {
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
				<Feed products={productData} />
			</main>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const productData: Products = await fetch(
		"https://fakestoreapi.com/products"
	).then((res) => res.json());

	return {
		props: {
			productData,
		},
	};
};
