/** @type {import('tailwindcss').Config} */
// /** @type {import('tailwindcss-animate').Config} */
const tailwindcssAnimate=import('tailwindcss-animate')
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [tailwindcssAnimate],
};



