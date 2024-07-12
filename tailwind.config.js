/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#7C6A46',
          300: '#594723'
        }
      },
      fontFamily: {
        'dancing': ["Dancing Script"]
      }
    },
  },
  plugins: [],
}

