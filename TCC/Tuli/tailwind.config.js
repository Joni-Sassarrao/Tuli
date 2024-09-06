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
        'fundo2': '#F2DFDF',
        'fundo2(o)': "rgba(242, 223, 223, 0.5)",
        'texto1': "#595859",
        'texto2': "#A95858",
      }
    },
  },
  plugins: [],
}
