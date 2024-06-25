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
    boxShadow:{
      'ShadowCard': '0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 2px rgba(0, 0, 0, 0.12)'
    },
    colors:{
      'preto': 'rgba(0, 0, 0, 0.4)',
    }
  },
  },
  plugins: [],
}