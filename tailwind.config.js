/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				amazon: {
					light_blue: "#232F3E",
					DEFAULT: "#131921",
				},
			},
		},
	},
	plugins: [],
};
