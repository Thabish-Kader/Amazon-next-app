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
	const { items, email }: Data = req.body;

	const transformedItems = items.map((data) => ({
		price_data: {
			currency: "usd",
			unit_amount: data.price * 100,
			product_data: {
				name: data.title,
				description: data.description,
				images: [data.image],
			},
		},
		quantity: 1,
	}));

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: transformedItems,
			mode: "payment",
			success_url: `${process.env.HOST}/success`,
			cancel_url: `${process.env.HOST}/checkout`,
			metadata: {
				email,
				images: JSON.stringify(items.map((item) => item.image)),
			},
		});
		// res.redirect(303, session.url);
		return res.send(session.url);
	} catch (err: any) {
		res.status(err.statusCode || 500).json(err.message);
	}
}
