import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_ID),
			clientSecret: String(process.env.GOOGLE_SECRET),
		}),
		// ...add more providers here
	],
	secret: process.env.NEXT_SECRET,
};

export default NextAuth(authOptions);
