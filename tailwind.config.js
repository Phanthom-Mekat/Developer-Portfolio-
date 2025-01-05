import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary: '#8b64e6',
  			accent: '#93c5fd',
  			secondary: '#45b3fa'
      }
  	}
  },
  plugins: [
    daisyui,
      // eslint-disable-next-line no-undef
      require("tailwindcss-animate")
],
}