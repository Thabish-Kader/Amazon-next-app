import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { Products } from "../../typings";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type Data = {
	items: Products[];
	email: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// if (req.method === "POST") {
	const { items }: Data = req.body;
	console.log(items);
	// const transformedData = item.map((data) => ({
	// 	price_data: {
	// 		currency: "usd",
	// 		unit_amount: data.price * 100,
	// 		product_data: {
	// 			name: data.title,
	// 			description: data.description,
	// 			images: [data.image],
	// 		},
	// 	},
	// 	quantity: 1,
	// }));
	const transformedItems = items.map((item) => ({
		price_data: {
			currency: "usd",
			unit_amount: item.price * 100,
			product_data: {
				name: item.title,
				description: item.description,
				images: [item.image],
			},
		},
		quantity: 1,
	}));
	try {
		// Create Checkout Sessions from body params.
		const session = await stripe.checkout.sessions.create({
			line_items: transformedItems,
			mode: "payment",
			success_url: `${process.env.HOST}/success`,
			cancel_url: `${process.env.HOST}/checkout`,
		});
		res.redirect(303, session.url);
	} catch (err: any) {
		res.status(err.statusCode || 500).json(err.message);
	}
}
