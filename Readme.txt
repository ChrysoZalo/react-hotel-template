command to create the app:
- npm create vite@4.1.0

to add taiwind css:
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

add this to tailwind.config.js:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

add this to index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;