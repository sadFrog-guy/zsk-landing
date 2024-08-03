/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvereg': ['Helvetica Neue Regular', 'sans-serif'],
        'helvemed': ['Helvetica Neue Medium', 'sans-serif'],
        'helvebold': ['Helvetica Neue Bold', 'sans-serif'],
        'days': ['Days Sans', 'sans-serif'],
      },
      colors: {
        'custom-grey': '#F1EEEE',
        'custom-darkgrey': '#D8D8D8',
        'custom-orange': '#E94735',
        'custom-border': '#C9C7C7',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(167deg, rgba(233,71,53,1) 0%, rgba(194,28,30,1) 100%)',
        'custom-gradient2': 'linear-gradient(157deg, rgba(246,246,246,1) 0%, rgba(220,220,220,1) 100%)',
      }
    },
  },
  plugins: [],
}

