/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Inspired by Cadbury's rich purple
        'primary': '#3D1E56',
        // A slightly lighter purple for backgrounds or accents
        'primary-light': '#512D6D',
        // The elegant gold for CTAs and highlights
        'secondary': '#F2C744',
        // A darker gold for hover states
        'secondary-dark': '#E0B840',
        // A very light, premium off-white for main backgrounds
        'background': '#F9F7FD',
        // Dark charcoal for primary text
        'dark-text': '#1A202C',
        // Softer grey for secondary text
        'light-text': '#5A6474',
      },
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        // Using a more elegant serif font for headings
        'serif': ['"Lora"', 'serif'],
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        // A large radius for the distinctive card shape
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
}