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
        'fundo1': '#D9B1AD',
        'fundo1(o)': 'rgba(217, 177, 173, 0.24)',
        'fundo2': '#F2DFDF',
        'fundo2(o)': 'rgba(242, 223, 223, 0.5)',
        'fundo3': 'rgba(251,247,244,1) 100%',
        'texto1': '#595859',
        'texto2': '#A95858',
        'texto3': 'rgba(51, 51, 51, 0.8)',
      },
      boxShadow: {
        'Card': '0 3px 1px rgba(0, 0, 0, 0.12), 0 4px 2px rgba(1, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
