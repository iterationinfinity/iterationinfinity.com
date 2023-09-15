/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				serif: ["'Vollkorn', serif"],
				head: ["'Ruslan Display', cursive"],
				barcode: ["'Libre Barcode 128', cursive"],
			},
			colors: {
				"nice-orange": {
					DEFAULT: "#FFBF42",
				},
			},
		},
	},
	plugins: [],
};
