/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans-serif'],
      'prompt': ['Prompt', 'sans-serif']
    },
  extend: {
    colors:{
      'preto': 'rgba(0, 0, 0, 0.4)',
    }
  },
  },
  plugins: [],
}
