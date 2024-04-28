/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				default: 'var(--default)',
				light: 'var(--light)',
				dark: 'var(--dark)',
				text: 'var(--text)',
				yellow: 'var(--yellow)',
			},
		},
	},
	plugins: [],
}
