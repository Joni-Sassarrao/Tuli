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
        'prompt': ['Prompt', 'sans-serif'],
        'fira' : ['Fira Code', 'monospace'],
      },
      colors: {
        'fundo1': '#D9B1AD',
        'fundo1(o)': 'rgba(217, 177, 173, 0.24)',
        'fundo2': '#F2DFDF',
        'fundo2(o)': 'rgba(242, 223, 223, 0.5)',
        'fundo2(1)': 'rgba(242, 223, 223, 0.4)',
        'fundo3': 'rgba(251,247,244,1) 100%',
        'fundo4': '#B36C6C',
        'fundo5': 'rgba(251, 251, 251, 0.9)',
        'fundo6': '#FBF7F4',
        'fundo7': 'rgba(225, 205, 181, 0.15)',
        'texto1': '#595859',
        'texto2': '#A95858',
        'texto3': 'rgba(51, 51, 51, 0.8)',
        'texto4': '#796E6C',
      },
      boxShadow: {
        'Card': '0 3px 1px rgba(0, 0, 0, 0.12), 0 4px 2px rgba(1, 0, 0, 0.12)',
        'Botao': 'rgba(0, 0, 0, 0.3) 0px 2px 6px 0px',
        'Botao-ativado': 'rgba(0, 0, 0, 0.3) 0px 1px 4px 0px',
      },
      screens: {
        'desktop90' : '1500px',
        'desktop100' : '1300px',
        'desktop110' : '1200px',
      },
    },
  },
  plugins: [],
}
