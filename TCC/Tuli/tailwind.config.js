/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'prompt': ['Prompt', 'sans-serif']
      },
      colors: {
        'fundo1': "#D9B1AD",
        'texto1': "#595859"
      }
    },
  },
  plugins: [],
}
