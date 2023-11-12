/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rust-grey': '#47585C',
				'willow-grey': '#C8D5BB'
			},
			fontFamily: {
				'epiloge': ['Epilogue', 'sans-serif'],
				'oskon': ['Oskon', 'sans-serif']
			}
		},
	},
	plugins: [],
	darkMode: 'class',
}
